import BigNumber from 'bignumber.js';

export function toBigNumber(value: string | number | BigNumber): BigNumber {
  return new BigNumber(value);
}

export const separator = ' ';

export const minimalAllowedLength = 7;

export const powers = '⁰¹²³⁴⁵⁶⁷⁸⁹';

export const powerMinus = '⁻';

export const getSeparatorsNumber = (valueLength: number): number => {
  return Math.floor((valueLength - 1) / 3);
};

export const addSeparators = (value: string): string => {
  const [integerPart, decimalPart] = value.split('.');
  let reversedIntegerPartWithSeparators = '';

  for (let i = 0; i < integerPart.length; i++) {
    const symbol = integerPart[integerPart.length - i - 1];
    if (i > 0 && i % 3 === 0) {
      reversedIntegerPartWithSeparators += `${separator}${symbol}`;
    } else {
      reversedIntegerPartWithSeparators += symbol;
    }
  }

  const integerPartWithSeparators = reversedIntegerPartWithSeparators
    .split('')
    .reverse()
    .join('');

  if (decimalPart) {
    return `${integerPartWithSeparators}.${decimalPart}`;
  }

  return integerPartWithSeparators;
};

export const numberToPowerString = (value: number | string): string => {
  return value
    .toString()
    .split('')
    .map((char) => powers[Number(char)])
    .join('');
};

export interface FormatNumberOptions {
  roundUp?: boolean;
}
export const format = (
  value: number | string | BigNumber,
  maxLength?: number | 'unlimited',
  options?: FormatNumberOptions
): string => {
  const bnValue = toBigNumber(value);

  if (bnValue.eq(0)) {
    return '0';
  }

  if (maxLength === 'unlimited') {
    return addSeparators(bnValue.toFixed());
  }

  maxLength ||= minimalAllowedLength;

  if (maxLength < minimalAllowedLength) {
    throw new Error(`Max length must be grater than ${minimalAllowedLength}`);
  }

  const roundUp = !!options?.roundUp;
  const bnRoundMode = roundUp ? BigNumber.ROUND_UP : BigNumber.ROUND_FLOOR;
  const integerPart = bnValue.decimalPlaces(0, BigNumber.ROUND_FLOOR);
  const decimalPart = bnValue.minus(integerPart);
  const integerPartLength = integerPart.toFixed().length;
  const integerPartSeparatorsNumber = getSeparatorsNumber(integerPartLength);

  if (integerPart.eq(0)) {
    const slicedDecimalPart = decimalPart.decimalPlaces(
      maxLength - 2,
      bnRoundMode
    );

    if (!slicedDecimalPart.eq(0)) {
      return slicedDecimalPart.toString();
    }

    return `${
      decimalPart.c![0].toString()[0]
    }x10${powerMinus}${numberToPowerString(decimalPart.e!)}`;
  }

  const separatedIntegerPartLength =
    integerPartLength + integerPartSeparatorsNumber;
  const separatedIntegerPartWithDotLength = separatedIntegerPartLength + 1;
  if (separatedIntegerPartWithDotLength + 1 <= maxLength) {
    return addSeparators(
      bnValue
        .decimalPlaces(
          maxLength - separatedIntegerPartWithDotLength,
          bnRoundMode
        )
        .toString()
    );
  }

  if (separatedIntegerPartLength <= maxLength) {
    return addSeparators(bnValue.decimalPlaces(0, bnRoundMode).toString());
  }

  if (integerPartLength > 9) {
    const formattedValue = addSeparators(
      bnValue.div(1_000_000_000).decimalPlaces(2, bnRoundMode).toString()
    );
    return `${formattedValue}b`;
  }

  const formattedValue = addSeparators(
    bnValue.div(1_000_000).decimalPlaces(2, bnRoundMode).toString()
  );
  return `${formattedValue}m`;
};
