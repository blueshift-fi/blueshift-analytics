import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Built-in java.math.BigDecimal */
  BigDecimal: number;
  /** BigInt for number */
  BigInt: number;
  /** Built-in scalar representing a local date-time */
  LocalDateTime: string;
  /** Long type */
  Long: number;
  /** Use SPQR's SchemaPrinter to remove this from SDL */
  UNREPRESENTABLE: any;
};

export type Block = {
  __typename?: 'Block';
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['BigInt']>;
};

export type Bundle_Filter = {
  dateTime?: InputMaybe<Scalars['LocalDateTime']>;
  dateTime_gt?: InputMaybe<Scalars['LocalDateTime']>;
  dateTime_gte?: InputMaybe<Scalars['LocalDateTime']>;
  dateTime_lt?: InputMaybe<Scalars['LocalDateTime']>;
  dateTime_lte?: InputMaybe<Scalars['LocalDateTime']>;
};

export enum Bundle_OrderBy {
  DateTime = 'dateTime',
  EthPriceUsd = 'ethPriceUSD'
}

/** withdraw liquidity */
export type Burn = {
  __typename?: 'Burn';
  addressId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigDecimal']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  dateTime?: Maybe<Scalars['LocalDateTime']>;
  id?: Maybe<Scalars['ID']>;
  origin?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Portfolio>;
  timestamp?: Maybe<Scalars['Long']>;
  token?: Maybe<Token>;
  transaction?: Maybe<Transaction>;
};

export type Burn_Filter = {
  portfolioAddress?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['String']>;
};

export enum Burn_OrderBy {
  DateTime = 'dateTime',
  Timestamp = 'timestamp'
}

export type ChainIndexingStatus = {
  __typename?: 'ChainIndexingStatus';
  chainHeadBlock?: Maybe<Block>;
  id?: Maybe<Scalars['ID']>;
  latestBlock?: Maybe<Block>;
  network?: Maybe<Scalars['String']>;
};

/** crypto transaction */
export type Explorer = {
  __typename?: 'Explorer';
  addressId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Long']>;
  dateTime?: Maybe<Scalars['LocalDateTime']>;
  deposits?: Maybe<Array<Maybe<Mint>>>;
  gasPrice?: Maybe<Scalars['Long']>;
  gasUsed?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['ID']>;
  rawInput?: Maybe<Scalars['String']>;
  swaps?: Maybe<Array<Maybe<Swap>>>;
  timestamp?: Maybe<Scalars['Long']>;
  withdraws?: Maybe<Array<Maybe<Burn>>>;
};

export type Factory = {
  __typename?: 'Factory';
  dateTime?: Maybe<Scalars['LocalDateTime']>;
  fees24hChange?: Maybe<Scalars['BigDecimal']>;
  fees24hUSD?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['ID']>;
  interval?: Maybe<IntervalType>;
  tvl24hChange?: Maybe<Scalars['BigDecimal']>;
  tvlUSD?: Maybe<Scalars['BigDecimal']>;
  txCount?: Maybe<Scalars['Long']>;
  txCount24hChange?: Maybe<Scalars['Long']>;
  volume24hChange?: Maybe<Scalars['BigDecimal']>;
  volume24hUSD?: Maybe<Scalars['BigDecimal']>;
};

export type Factory_Filter = {
  dateTime?: InputMaybe<Scalars['LocalDateTime']>;
  dateTime_gt?: InputMaybe<Scalars['LocalDateTime']>;
  dateTime_lt?: InputMaybe<Scalars['LocalDateTime']>;
  interval?: InputMaybe<IntervalType>;
};

export enum Factory_OrderBy {
  DateTime = 'dateTime',
  Fees24hUsd = 'fees24hUSD',
  TvlUsd = 'tvlUSD',
  Volume24hUsd = 'volume24hUSD'
}

export type Health = {
  __typename?: 'Health';
  chains?: Maybe<ChainIndexingStatus>;
  health?: Maybe<HealthType>;
  id?: Maybe<Scalars['ID']>;
  synced?: Maybe<Scalars['Boolean']>;
};

export enum HealthType {
  Failed = 'failed',
  Healthy = 'healthy',
  Unhealthy = 'unhealthy'
}

export enum IntervalType {
  Days_7 = 'DAYS_7',
  Days_30 = 'DAYS_30',
  Hours_1 = 'HOURS_1',
  Hours_24 = 'HOURS_24',
  Minutes_10 = 'MINUTES_10',
  Months_3 = 'MONTHS_3',
  Months_6 = 'MONTHS_6',
  Months_12 = 'MONTHS_12'
}

/** deposit liquidity */
export type Mint = {
  __typename?: 'Mint';
  addressId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigDecimal']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  dateTime?: Maybe<Scalars['LocalDateTime']>;
  id?: Maybe<Scalars['ID']>;
  origin?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Portfolio>;
  sender?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Long']>;
  token?: Maybe<Token>;
  transaction?: Maybe<Transaction>;
};

export type Mint_Filter = {
  portfolioAddress?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['String']>;
};

export enum Mint_OrderBy {
  DateTime = 'dateTime',
  Timestamp = 'timestamp'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pair = {
  __typename?: 'Pair';
  addressId?: Maybe<Scalars['ID']>;
  createdAtBlockNumber?: Maybe<Scalars['Long']>;
  createdAtTimestamp?: Maybe<Scalars['Long']>;
  liquidityProviderCount?: Maybe<Scalars['Long']>;
  reserve0?: Maybe<Scalars['BigDecimal']>;
  reserve1?: Maybe<Scalars['BigDecimal']>;
  reserveETH?: Maybe<Scalars['BigDecimal']>;
  reserveUSD?: Maybe<Scalars['BigDecimal']>;
  token0?: Maybe<Token>;
  token0Price?: Maybe<Scalars['BigDecimal']>;
  token1?: Maybe<Token>;
  token1Price?: Maybe<Scalars['BigDecimal']>;
  totalSupply?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH?: Maybe<Scalars['BigDecimal']>;
  txCount?: Maybe<Scalars['Long']>;
  untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeToken0?: Maybe<Scalars['BigDecimal']>;
  volumeToken1?: Maybe<Scalars['BigDecimal']>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
};

export type Pair_Filter = {
  addressId?: InputMaybe<Scalars['String']>;
  addressId_not?: InputMaybe<Scalars['String']>;
};

export enum Pair_OrderBy {
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  LiquidityProviderCount = 'liquidityProviderCount',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveEth = 'reserveETH',
  ReserveUsd = 'reserveUSD',
  Token0 = 'token0',
  Token0Price = 'token0Price',
  Token1 = 'token1',
  Token1Price = 'token1Price',
  TotalSupply = 'totalSupply',
  TrackedReserveEth = 'trackedReserveETH',
  TxCount = 'txCount',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type Portfolio = {
  __typename?: 'Portfolio';
  addressId?: Maybe<Scalars['String']>;
  baseToken?: Maybe<Token>;
  baseTokenAddress?: Maybe<Scalars['String']>;
  fees24hETH?: Maybe<Scalars['BigDecimal']>;
  fees24hUSD?: Maybe<Scalars['BigDecimal']>;
  fees30dUSD?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['ID']>;
  lpToken?: Maybe<Token>;
  lpTokenAddress?: Maybe<Scalars['String']>;
  lpTokenPrice?: Maybe<Scalars['BigDecimal']>;
  lpTokenPriceUSD?: Maybe<Scalars['BigDecimal']>;
  name?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<Maybe<Token>>>;
  tvlBase?: Maybe<Scalars['BigDecimal']>;
  tvlUSD?: Maybe<Scalars['BigDecimal']>;
  tvlUSD24hChange?: Maybe<Scalars['BigDecimal']>;
  txCount?: Maybe<Scalars['BigDecimal']>;
  volume24hBase?: Maybe<Scalars['BigDecimal']>;
  volume24hETH?: Maybe<Scalars['BigDecimal']>;
  volume24hUSD?: Maybe<Scalars['BigDecimal']>;
  volume30d?: Maybe<Scalars['BigDecimal']>;
  volume30dUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD24hChange?: Maybe<Scalars['BigDecimal']>;
};

export type PortfolioIntervalDataDto = {
  __typename?: 'PortfolioIntervalDataDto';
  dateTime?: Maybe<Scalars['LocalDateTime']>;
  fees7dUSD?: Maybe<Scalars['BigDecimal']>;
  fees24hUSD?: Maybe<Scalars['BigDecimal']>;
  fees30dUSD?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['ID']>;
  interval?: Maybe<IntervalType>;
  portfolio?: Maybe<Portfolio>;
  portfolioAddress?: Maybe<Scalars['String']>;
  tvlBase?: Maybe<Scalars['BigDecimal']>;
  tvlUSD?: Maybe<Scalars['BigDecimal']>;
  tvl_d?: Maybe<Scalars['BigDecimal']>;
  volume7d?: Maybe<Scalars['BigDecimal']>;
  volume7dUSD?: Maybe<Scalars['BigDecimal']>;
  volume7d_d?: Maybe<Scalars['BigDecimal']>;
  volume24h?: Maybe<Scalars['BigDecimal']>;
  volume24hUSD?: Maybe<Scalars['BigDecimal']>;
  volume24h_d?: Maybe<Scalars['BigDecimal']>;
  volume30d?: Maybe<Scalars['BigDecimal']>;
  volume30dUSD?: Maybe<Scalars['BigDecimal']>;
  volume30d_d?: Maybe<Scalars['BigDecimal']>;
};

export type PortfolioIntervalData_Filter = {
  dateTime_gt?: InputMaybe<Scalars['LocalDateTime']>;
  dateTime_lt?: InputMaybe<Scalars['LocalDateTime']>;
  interval?: InputMaybe<IntervalType>;
  portfolioAddress?: InputMaybe<Scalars['String']>;
};

export enum PortfolioIntervalData_OrderBy {
  DateTime = 'dateTime',
  FeesUsd = 'feesUSD',
  PortfolioAddress = 'portfolioAddress',
  TvlUsd = 'tvlUSD',
  VolumeUsd = 'volumeUSD'
}

export type Portfolio_Filter = {
  addressId?: InputMaybe<Scalars['String']>;
  addressId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  addressId_not?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tokenAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum Portfolio_OrderBy {
  AddressId = 'addressId',
  Id = 'id',
  Name = 'name',
  TvlUsd = 'tvlUSD'
}

export type PriceEth = {
  __typename?: 'PriceEth';
  dateTime?: Maybe<Scalars['LocalDateTime']>;
  ethPriceUSD?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['ID']>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  /** aka pricesETH. Get price of ETH (currently ADA) */
  bundles?: Maybe<Array<Maybe<PriceEth>>>;
  /** get mints */
  burns?: Maybe<Array<Maybe<Transaction>>>;
  /** get summary statistic data */
  factories?: Maybe<Array<Maybe<Factory>>>;
  /** get current server status and sync state */
  health?: Maybe<Array<Maybe<Health>>>;
  /** get mints */
  mints?: Maybe<Array<Maybe<Mint>>>;
  /** get a pair */
  pair?: Maybe<Pair>;
  /** get all pair */
  pairs?: Maybe<Array<Maybe<Pair>>>;
  /** Get statistic for portfolio */
  portfolioIntervalDatas?: Maybe<Array<Maybe<PortfolioIntervalDataDto>>>;
  /** get all portfolios */
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
  /** get swaps */
  swaps?: Maybe<Array<Maybe<Swap>>>;
  /** Get statistic for token */
  tokenIntervalDatas?: Maybe<Array<Maybe<TokenIntervalData>>>;
  /** get all tokens */
  tokens?: Maybe<Array<Maybe<Token>>>;
  /** get transactions */
  transactionEntries?: Maybe<Array<Maybe<Transaction>>>;
  /** get all explorer transactions */
  transactions?: Maybe<Array<Maybe<Explorer>>>;
};


/** Query root */
export type QueryBundlesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Bundle_Filter>;
};


/** Query root */
export type QueryBurnsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Burn_Filter>;
};


/** Query root */
export type QueryFactoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Factory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Factory_Filter>;
};


/** Query root */
export type QueryMintsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Mint_Filter>;
};


/** Query root */
export type QueryPairArgs = {
  title?: InputMaybe<Scalars['String']>;
};


/** Query root */
export type QueryPairsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Pair_Filter>;
};


/** Query root */
export type QueryPortfolioIntervalDatasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PortfolioIntervalData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PortfolioIntervalData_Filter>;
};


/** Query root */
export type QueryPortfoliosArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Portfolio_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Portfolio_Filter>;
};


/** Query root */
export type QuerySwapsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Swap_Filter>;
};


/** Query root */
export type QueryTokenIntervalDatasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenIntervalData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TokenIntervalData_Filter>;
};


/** Query root */
export type QueryTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Token_Filter>;
};


/** Query root */
export type QueryTransactionEntriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Transaction_Filter>;
};


/** Query root */
export type QueryTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Transaction_Filter>;
};

/** swap tokens */
export type Swap = {
  __typename?: 'Swap';
  addressId?: Maybe<Scalars['String']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  dateTime?: Maybe<Scalars['LocalDateTime']>;
  id?: Maybe<Scalars['ID']>;
  origin?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Portfolio>;
  recipient?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Long']>;
  token0?: Maybe<Token>;
  token1?: Maybe<Token>;
  transaction?: Maybe<Transaction>;
};

export type Swap_Filter = {
  portfolioAddress?: InputMaybe<Scalars['String']>;
  token0Address?: InputMaybe<Scalars['String']>;
  token1Address?: InputMaybe<Scalars['String']>;
};

export enum Swap_OrderBy {
  DateTime = 'dateTime',
  Timestamp = 'timestamp'
}

export type Token = {
  __typename?: 'Token';
  addressId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigDecimal']>;
  decimals?: Maybe<Scalars['Long']>;
  depositEMAPrice?: Maybe<Scalars['BigDecimal']>;
  depositLimit?: Maybe<Scalars['BigDecimal']>;
  fees24hETH?: Maybe<Scalars['BigDecimal']>;
  fees24hUSD?: Maybe<Scalars['BigDecimal']>;
  fees30dUSD?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  portfolioShare?: Maybe<Scalars['BigDecimal']>;
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
  priceBase?: Maybe<Scalars['BigDecimal']>;
  priceETH?: Maybe<Scalars['BigDecimal']>;
  priceUSD?: Maybe<Scalars['BigDecimal']>;
  symbol: Scalars['String'];
  targetWeight?: Maybe<Scalars['BigDecimal']>;
  totalSupply?: Maybe<Scalars['BigDecimal']>;
  tvlETH?: Maybe<Scalars['BigDecimal']>;
  tvlUSD?: Maybe<Scalars['BigDecimal']>;
  tvlUSD24hChange?: Maybe<Scalars['BigDecimal']>;
  volume24hETH?: Maybe<Scalars['BigDecimal']>;
  volume24hUSD?: Maybe<Scalars['BigDecimal']>;
  volume30dUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD7dChange?: Maybe<Scalars['BigDecimal']>;
  volumeUSD24hChange?: Maybe<Scalars['BigDecimal']>;
  withdrawEMAPrice?: Maybe<Scalars['BigDecimal']>;
  withdrawLimit?: Maybe<Scalars['BigDecimal']>;
};

export type TokenIntervalData = {
  __typename?: 'TokenIntervalData';
  close?: Maybe<Scalars['BigDecimal']>;
  dateTime?: Maybe<Scalars['LocalDateTime']>;
  high?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['ID']>;
  interval?: Maybe<IntervalType>;
  low?: Maybe<Scalars['BigDecimal']>;
  open?: Maybe<Scalars['BigDecimal']>;
  token?: Maybe<Token>;
  tokenAddress?: Maybe<Scalars['String']>;
};

export type TokenIntervalData_Filter = {
  dateTime_gt?: InputMaybe<Scalars['LocalDateTime']>;
  interval?: InputMaybe<IntervalType>;
  tokenAddress?: InputMaybe<Scalars['String']>;
};

export enum TokenIntervalData_OrderBy {
  DateTime = 'dateTime',
  TokenAddress = 'tokenAddress'
}

export type Token_Filter = {
  addressId?: InputMaybe<Scalars['String']>;
  addressId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  addressId_not?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
};

export enum Token_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TvlUsd = 'tvlUSD'
}

/** crypto transaction */
export type Transaction = {
  __typename?: 'Transaction';
  addressId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['Long']>;
  dateTime?: Maybe<Scalars['LocalDateTime']>;
  deposits?: Maybe<Array<Maybe<Mint>>>;
  gasPrice?: Maybe<Scalars['Long']>;
  gasUsed?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['ID']>;
  rawInput?: Maybe<Scalars['String']>;
  swaps?: Maybe<Array<Maybe<Swap>>>;
  timestamp?: Maybe<Scalars['Long']>;
  withdraws?: Maybe<Array<Maybe<Burn>>>;
};

export type Transaction_Filter = {
  addressId?: InputMaybe<Scalars['String']>;
  dateTime_gte?: InputMaybe<Scalars['LocalDateTime']>;
  timestamp_gte?: InputMaybe<Scalars['Long']>;
};

export enum Transaction_OrderBy {
  DateTime = 'dateTime',
  Timestamp = 'timestamp'
}

export type GetPortfolioQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type GetPortfolioQuery = { __typename?: 'Query', portfolios?: Array<{ __typename?: 'Portfolio', addressId?: string | null, baseTokenAddress?: string | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, lpTokenAddress?: string | null, lpTokenPrice?: number | null, lpTokenPriceUSD?: number | null, name?: string | null, tvlBase?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, txCount?: number | null, volume24hBase?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30d?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, baseToken?: { __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null, lpToken?: { __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null, tokens?: Array<{ __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null> | null } | null> | null };

export type GetStatPortfoliosQueryVariables = Exact<{
  start?: InputMaybe<Scalars['LocalDateTime']>;
  end?: InputMaybe<Scalars['LocalDateTime']>;
  interval?: InputMaybe<IntervalType>;
  portfolioAddress?: InputMaybe<Scalars['String']>;
}>;


export type GetStatPortfoliosQuery = { __typename?: 'Query', portfolioIntervalDatas?: Array<{ __typename?: 'PortfolioIntervalDataDto', id?: string | null, dateTime?: string | null, tvlUSD?: number | null, volume24hUSD?: number | null } | null> | null };

export type GetPortfoliosListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPortfoliosListQuery = { __typename?: 'Query', portfolios?: Array<{ __typename?: 'Portfolio', addressId?: string | null, baseTokenAddress?: string | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, lpTokenAddress?: string | null, lpTokenPrice?: number | null, lpTokenPriceUSD?: number | null, name?: string | null, tvlBase?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, txCount?: number | null, volume24hBase?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30d?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, baseToken?: { __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null, lpToken?: { __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null, tokens?: Array<{ __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null> | null } | null> | null };

export type GetTvlStatisticQueryVariables = Exact<{
  start?: InputMaybe<Scalars['LocalDateTime']>;
  end?: InputMaybe<Scalars['LocalDateTime']>;
  interval?: InputMaybe<IntervalType>;
}>;


export type GetTvlStatisticQuery = { __typename?: 'Query', factories?: Array<{ __typename?: 'Factory', id?: string | null, dateTime?: string | null, tvlUSD?: number | null } | null> | null };

export type GetTokensListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTokensListQuery = { __typename?: 'Query', tokens?: Array<{ __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null> | null };

export type GetTopPortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopPortfoliosQuery = { __typename?: 'Query', portfolios?: Array<{ __typename?: 'Portfolio', addressId?: string | null, baseTokenAddress?: string | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, lpTokenAddress?: string | null, lpTokenPrice?: number | null, lpTokenPriceUSD?: number | null, name?: string | null, tvlBase?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, txCount?: number | null, volume24hBase?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30d?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, baseToken?: { __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null, lpToken?: { __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null, tokens?: Array<{ __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null> | null } | null> | null };

export type GetTopTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopTokensQuery = { __typename?: 'Query', tokens?: Array<{ __typename?: 'Token', addressId?: string | null, amount?: number | null, decimals?: number | null, depositEMAPrice?: number | null, depositLimit?: number | null, fees24hETH?: number | null, fees24hUSD?: number | null, fees30dUSD?: number | null, id?: string | null, name?: string | null, portfolioShare?: number | null, priceBase?: number | null, priceETH?: number | null, priceUSD?: number | null, symbol: string, targetWeight?: number | null, totalSupply?: number | null, tvlETH?: number | null, tvlUSD?: number | null, tvlUSD24hChange?: number | null, volume24hETH?: number | null, volume24hUSD?: number | null, volume30dUSD?: number | null, volumeUSD24hChange?: number | null, volumeUSD7dChange?: number | null, withdrawEMAPrice?: number | null, withdrawLimit?: number | null } | null> | null };

export type GetTopTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopTransactionsQuery = { __typename?: 'Query', transactions?: Array<{ __typename?: 'Explorer', addressId?: string | null, blockNumber?: number | null, dateTime?: string | null, gasPrice?: number | null, gasUsed?: number | null, id?: string | null, swaps?: Array<{ __typename?: 'Swap', token0?: { __typename?: 'Token', name?: string | null } | null, token1?: { __typename?: 'Token', name?: string | null } | null } | null> | null } | null> | null };


export const GetPortfolioDocument = gql`
    query getPortfolio($name: String) {
  portfolios(first: 50, orderBy: name, orderDirection: desc, where: {name: $name}) {
    addressId
    baseToken {
      addressId
      amount
      decimals
      depositEMAPrice
      depositLimit
      fees24hETH
      fees24hUSD
      fees30dUSD
      id
      name
      portfolioShare
      priceBase
      priceETH
      priceUSD
      symbol
      targetWeight
      totalSupply
      tvlETH
      tvlUSD
      tvlUSD24hChange
      volume24hETH
      volume24hUSD
      volume30dUSD
      volumeUSD24hChange
      volumeUSD7dChange
      withdrawEMAPrice
      withdrawLimit
    }
    baseTokenAddress
    fees24hETH
    fees24hUSD
    fees30dUSD
    id
    lpToken {
      addressId
      amount
      decimals
      depositEMAPrice
      depositLimit
      fees24hETH
      fees24hUSD
      fees30dUSD
      id
      name
      portfolioShare
      priceBase
      priceETH
      priceUSD
      symbol
      targetWeight
      totalSupply
      tvlETH
      tvlUSD
      tvlUSD24hChange
      volume24hETH
      volume24hUSD
      volume30dUSD
      volumeUSD24hChange
      volumeUSD7dChange
      withdrawEMAPrice
      withdrawLimit
    }
    lpTokenAddress
    lpTokenPrice
    lpTokenPriceUSD
    name
    tokens {
      addressId
      amount
      decimals
      depositEMAPrice
      depositLimit
      fees24hETH
      fees24hUSD
      fees30dUSD
      id
      name
      portfolioShare
      priceBase
      priceETH
      priceUSD
      symbol
      targetWeight
      totalSupply
      tvlETH
      tvlUSD
      tvlUSD24hChange
      volume24hETH
      volume24hUSD
      volume30dUSD
      volumeUSD24hChange
      volumeUSD7dChange
      withdrawEMAPrice
      withdrawLimit
    }
    tvlBase
    tvlUSD
    tvlUSD24hChange
    txCount
    volume24hBase
    volume24hETH
    volume24hUSD
    volume30d
    volume30dUSD
    volumeUSD24hChange
  }
}
    `;

/**
 * __useGetPortfolioQuery__
 *
 * To run a query within a Vue component, call `useGetPortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfolioQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPortfolioQuery({
 *   name: // value for 'name'
 * });
 */
export function useGetPortfolioQuery(variables: GetPortfolioQueryVariables | VueCompositionApi.Ref<GetPortfolioQueryVariables> | ReactiveFunction<GetPortfolioQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<GetPortfolioQuery, GetPortfolioQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPortfolioQuery, GetPortfolioQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPortfolioQuery, GetPortfolioQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetPortfolioQuery, GetPortfolioQueryVariables>(GetPortfolioDocument, variables, options);
}
export function useGetPortfolioLazyQuery(variables: GetPortfolioQueryVariables | VueCompositionApi.Ref<GetPortfolioQueryVariables> | ReactiveFunction<GetPortfolioQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<GetPortfolioQuery, GetPortfolioQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPortfolioQuery, GetPortfolioQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPortfolioQuery, GetPortfolioQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetPortfolioQuery, GetPortfolioQueryVariables>(GetPortfolioDocument, variables, options);
}
export type GetPortfolioQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetPortfolioQuery, GetPortfolioQueryVariables>;
export const GetStatPortfoliosDocument = gql`
    query getStatPortfolios($start: LocalDateTime, $end: LocalDateTime, $interval: IntervalType, $portfolioAddress: String) {
  portfolioIntervalDatas(
    first: 100
    where: {portfolioAddress: $portfolioAddress, interval: $interval, dateTime_gt: $start, dateTime_lt: $end}
  ) {
    id
    dateTime
    tvlUSD
    volume24hUSD
  }
}
    `;

/**
 * __useGetStatPortfoliosQuery__
 *
 * To run a query within a Vue component, call `useGetStatPortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatPortfoliosQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetStatPortfoliosQuery({
 *   start: // value for 'start'
 *   end: // value for 'end'
 *   interval: // value for 'interval'
 *   portfolioAddress: // value for 'portfolioAddress'
 * });
 */
export function useGetStatPortfoliosQuery(variables: GetStatPortfoliosQueryVariables | VueCompositionApi.Ref<GetStatPortfoliosQueryVariables> | ReactiveFunction<GetStatPortfoliosQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<GetStatPortfoliosQuery, GetStatPortfoliosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStatPortfoliosQuery, GetStatPortfoliosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStatPortfoliosQuery, GetStatPortfoliosQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetStatPortfoliosQuery, GetStatPortfoliosQueryVariables>(GetStatPortfoliosDocument, variables, options);
}
export function useGetStatPortfoliosLazyQuery(variables: GetStatPortfoliosQueryVariables | VueCompositionApi.Ref<GetStatPortfoliosQueryVariables> | ReactiveFunction<GetStatPortfoliosQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<GetStatPortfoliosQuery, GetStatPortfoliosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStatPortfoliosQuery, GetStatPortfoliosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStatPortfoliosQuery, GetStatPortfoliosQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetStatPortfoliosQuery, GetStatPortfoliosQueryVariables>(GetStatPortfoliosDocument, variables, options);
}
export type GetStatPortfoliosQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetStatPortfoliosQuery, GetStatPortfoliosQueryVariables>;
export const GetPortfoliosListDocument = gql`
    query getPortfoliosList {
  portfolios(first: 50, orderBy: name, orderDirection: desc) {
    addressId
    baseToken {
      addressId
      amount
      decimals
      depositEMAPrice
      depositLimit
      fees24hETH
      fees24hUSD
      fees30dUSD
      id
      name
      portfolioShare
      priceBase
      priceETH
      priceUSD
      symbol
      targetWeight
      totalSupply
      tvlETH
      tvlUSD
      tvlUSD24hChange
      volume24hETH
      volume24hUSD
      volume30dUSD
      volumeUSD24hChange
      volumeUSD7dChange
      withdrawEMAPrice
      withdrawLimit
    }
    baseTokenAddress
    fees24hETH
    fees24hUSD
    fees30dUSD
    id
    lpToken {
      addressId
      amount
      decimals
      depositEMAPrice
      depositLimit
      fees24hETH
      fees24hUSD
      fees30dUSD
      id
      name
      portfolioShare
      priceBase
      priceETH
      priceUSD
      symbol
      targetWeight
      totalSupply
      tvlETH
      tvlUSD
      tvlUSD24hChange
      volume24hETH
      volume24hUSD
      volume30dUSD
      volumeUSD24hChange
      volumeUSD7dChange
      withdrawEMAPrice
      withdrawLimit
    }
    lpTokenAddress
    lpTokenPrice
    lpTokenPriceUSD
    name
    tokens {
      addressId
      amount
      decimals
      depositEMAPrice
      depositLimit
      fees24hETH
      fees24hUSD
      fees30dUSD
      id
      name
      portfolioShare
      priceBase
      priceETH
      priceUSD
      symbol
      targetWeight
      totalSupply
      tvlETH
      tvlUSD
      tvlUSD24hChange
      volume24hETH
      volume24hUSD
      volume30dUSD
      volumeUSD24hChange
      volumeUSD7dChange
      withdrawEMAPrice
      withdrawLimit
    }
    tvlBase
    tvlUSD
    tvlUSD24hChange
    txCount
    volume24hBase
    volume24hETH
    volume24hUSD
    volume30d
    volume30dUSD
    volumeUSD24hChange
  }
}
    `;

/**
 * __useGetPortfoliosListQuery__
 *
 * To run a query within a Vue component, call `useGetPortfoliosListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfoliosListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPortfoliosListQuery();
 */
export function useGetPortfoliosListQuery(options: VueApolloComposable.UseQueryOptions<GetPortfoliosListQuery, GetPortfoliosListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPortfoliosListQuery, GetPortfoliosListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPortfoliosListQuery, GetPortfoliosListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetPortfoliosListQuery, GetPortfoliosListQueryVariables>(GetPortfoliosListDocument, {}, options);
}
export function useGetPortfoliosListLazyQuery(options: VueApolloComposable.UseQueryOptions<GetPortfoliosListQuery, GetPortfoliosListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPortfoliosListQuery, GetPortfoliosListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPortfoliosListQuery, GetPortfoliosListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetPortfoliosListQuery, GetPortfoliosListQueryVariables>(GetPortfoliosListDocument, {}, options);
}
export type GetPortfoliosListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetPortfoliosListQuery, GetPortfoliosListQueryVariables>;
export const GetTvlStatisticDocument = gql`
    query getTvlStatistic($start: LocalDateTime, $end: LocalDateTime, $interval: IntervalType) {
  factories(
    first: 100
    where: {interval: $interval, dateTime_gt: $start, dateTime_lt: $end}
  ) {
    id
    dateTime
    tvlUSD
  }
}
    `;

/**
 * __useGetTvlStatisticQuery__
 *
 * To run a query within a Vue component, call `useGetTvlStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTvlStatisticQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetTvlStatisticQuery({
 *   start: // value for 'start'
 *   end: // value for 'end'
 *   interval: // value for 'interval'
 * });
 */
export function useGetTvlStatisticQuery(variables: GetTvlStatisticQueryVariables | VueCompositionApi.Ref<GetTvlStatisticQueryVariables> | ReactiveFunction<GetTvlStatisticQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<GetTvlStatisticQuery, GetTvlStatisticQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTvlStatisticQuery, GetTvlStatisticQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTvlStatisticQuery, GetTvlStatisticQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetTvlStatisticQuery, GetTvlStatisticQueryVariables>(GetTvlStatisticDocument, variables, options);
}
export function useGetTvlStatisticLazyQuery(variables: GetTvlStatisticQueryVariables | VueCompositionApi.Ref<GetTvlStatisticQueryVariables> | ReactiveFunction<GetTvlStatisticQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<GetTvlStatisticQuery, GetTvlStatisticQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTvlStatisticQuery, GetTvlStatisticQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTvlStatisticQuery, GetTvlStatisticQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetTvlStatisticQuery, GetTvlStatisticQueryVariables>(GetTvlStatisticDocument, variables, options);
}
export type GetTvlStatisticQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetTvlStatisticQuery, GetTvlStatisticQueryVariables>;
export const GetTokensListDocument = gql`
    query getTokensList {
  tokens(first: 50, orderBy: name, orderDirection: desc) {
    addressId
    amount
    decimals
    depositEMAPrice
    depositLimit
    fees24hETH
    fees24hUSD
    fees30dUSD
    id
    name
    portfolioShare
    priceBase
    priceETH
    priceUSD
    symbol
    targetWeight
    totalSupply
    tvlETH
    tvlUSD
    tvlUSD24hChange
    volume24hETH
    volume24hUSD
    volume30dUSD
    volumeUSD24hChange
    volumeUSD7dChange
    withdrawEMAPrice
    withdrawLimit
  }
}
    `;

/**
 * __useGetTokensListQuery__
 *
 * To run a query within a Vue component, call `useGetTokensListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokensListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetTokensListQuery();
 */
export function useGetTokensListQuery(options: VueApolloComposable.UseQueryOptions<GetTokensListQuery, GetTokensListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTokensListQuery, GetTokensListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTokensListQuery, GetTokensListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetTokensListQuery, GetTokensListQueryVariables>(GetTokensListDocument, {}, options);
}
export function useGetTokensListLazyQuery(options: VueApolloComposable.UseQueryOptions<GetTokensListQuery, GetTokensListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTokensListQuery, GetTokensListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTokensListQuery, GetTokensListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetTokensListQuery, GetTokensListQueryVariables>(GetTokensListDocument, {}, options);
}
export type GetTokensListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetTokensListQuery, GetTokensListQueryVariables>;
export const GetTopPortfoliosDocument = gql`
    query getTopPortfolios {
  portfolios(first: 50, orderBy: name, orderDirection: desc) {
    addressId
    baseToken {
      addressId
      amount
      decimals
      depositEMAPrice
      depositLimit
      fees24hETH
      fees24hUSD
      fees30dUSD
      id
      name
      portfolioShare
      priceBase
      priceETH
      priceUSD
      symbol
      targetWeight
      totalSupply
      tvlETH
      tvlUSD
      tvlUSD24hChange
      volume24hETH
      volume24hUSD
      volume30dUSD
      volumeUSD24hChange
      volumeUSD7dChange
      withdrawEMAPrice
      withdrawLimit
    }
    baseTokenAddress
    fees24hETH
    fees24hUSD
    fees30dUSD
    id
    lpToken {
      addressId
      amount
      decimals
      depositEMAPrice
      depositLimit
      fees24hETH
      fees24hUSD
      fees30dUSD
      id
      name
      portfolioShare
      priceBase
      priceETH
      priceUSD
      symbol
      targetWeight
      totalSupply
      tvlETH
      tvlUSD
      tvlUSD24hChange
      volume24hETH
      volume24hUSD
      volume30dUSD
      volumeUSD24hChange
      volumeUSD7dChange
      withdrawEMAPrice
      withdrawLimit
    }
    lpTokenAddress
    lpTokenPrice
    lpTokenPriceUSD
    name
    tokens {
      addressId
      amount
      decimals
      depositEMAPrice
      depositLimit
      fees24hETH
      fees24hUSD
      fees30dUSD
      id
      name
      portfolioShare
      priceBase
      priceETH
      priceUSD
      symbol
      targetWeight
      totalSupply
      tvlETH
      tvlUSD
      tvlUSD24hChange
      volume24hETH
      volume24hUSD
      volume30dUSD
      volumeUSD24hChange
      volumeUSD7dChange
      withdrawEMAPrice
      withdrawLimit
    }
    tvlBase
    tvlUSD
    tvlUSD24hChange
    txCount
    volume24hBase
    volume24hETH
    volume24hUSD
    volume30d
    volume30dUSD
    volumeUSD24hChange
  }
}
    `;

/**
 * __useGetTopPortfoliosQuery__
 *
 * To run a query within a Vue component, call `useGetTopPortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopPortfoliosQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetTopPortfoliosQuery();
 */
export function useGetTopPortfoliosQuery(options: VueApolloComposable.UseQueryOptions<GetTopPortfoliosQuery, GetTopPortfoliosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTopPortfoliosQuery, GetTopPortfoliosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTopPortfoliosQuery, GetTopPortfoliosQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetTopPortfoliosQuery, GetTopPortfoliosQueryVariables>(GetTopPortfoliosDocument, {}, options);
}
export function useGetTopPortfoliosLazyQuery(options: VueApolloComposable.UseQueryOptions<GetTopPortfoliosQuery, GetTopPortfoliosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTopPortfoliosQuery, GetTopPortfoliosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTopPortfoliosQuery, GetTopPortfoliosQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetTopPortfoliosQuery, GetTopPortfoliosQueryVariables>(GetTopPortfoliosDocument, {}, options);
}
export type GetTopPortfoliosQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetTopPortfoliosQuery, GetTopPortfoliosQueryVariables>;
export const GetTopTokensDocument = gql`
    query getTopTokens {
  tokens(first: 50, orderBy: name, orderDirection: desc) {
    addressId
    amount
    decimals
    depositEMAPrice
    depositLimit
    fees24hETH
    fees24hUSD
    fees30dUSD
    id
    name
    portfolioShare
    priceBase
    priceETH
    priceUSD
    symbol
    targetWeight
    totalSupply
    tvlETH
    tvlUSD
    tvlUSD24hChange
    volume24hETH
    volume24hUSD
    volume30dUSD
    volumeUSD24hChange
    volumeUSD7dChange
    withdrawEMAPrice
    withdrawLimit
  }
}
    `;

/**
 * __useGetTopTokensQuery__
 *
 * To run a query within a Vue component, call `useGetTopTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopTokensQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetTopTokensQuery();
 */
export function useGetTopTokensQuery(options: VueApolloComposable.UseQueryOptions<GetTopTokensQuery, GetTopTokensQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTopTokensQuery, GetTopTokensQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTopTokensQuery, GetTopTokensQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetTopTokensQuery, GetTopTokensQueryVariables>(GetTopTokensDocument, {}, options);
}
export function useGetTopTokensLazyQuery(options: VueApolloComposable.UseQueryOptions<GetTopTokensQuery, GetTopTokensQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTopTokensQuery, GetTopTokensQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTopTokensQuery, GetTopTokensQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetTopTokensQuery, GetTopTokensQueryVariables>(GetTopTokensDocument, {}, options);
}
export type GetTopTokensQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetTopTokensQuery, GetTopTokensQueryVariables>;
export const GetTopTransactionsDocument = gql`
    query getTopTransactions {
  transactions(first: 50, orderBy: dateTime, orderDirection: desc) {
    addressId
    blockNumber
    dateTime
    gasPrice
    gasUsed
    id
    swaps {
      token0 {
        name
      }
      token1 {
        name
      }
    }
  }
}
    `;

/**
 * __useGetTopTransactionsQuery__
 *
 * To run a query within a Vue component, call `useGetTopTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopTransactionsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetTopTransactionsQuery();
 */
export function useGetTopTransactionsQuery(options: VueApolloComposable.UseQueryOptions<GetTopTransactionsQuery, GetTopTransactionsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTopTransactionsQuery, GetTopTransactionsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTopTransactionsQuery, GetTopTransactionsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetTopTransactionsQuery, GetTopTransactionsQueryVariables>(GetTopTransactionsDocument, {}, options);
}
export function useGetTopTransactionsLazyQuery(options: VueApolloComposable.UseQueryOptions<GetTopTransactionsQuery, GetTopTransactionsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTopTransactionsQuery, GetTopTransactionsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTopTransactionsQuery, GetTopTransactionsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetTopTransactionsQuery, GetTopTransactionsQueryVariables>(GetTopTransactionsDocument, {}, options);
}
export type GetTopTransactionsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetTopTransactionsQuery, GetTopTransactionsQueryVariables>;