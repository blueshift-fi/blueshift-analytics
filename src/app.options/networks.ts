export enum SupportedNetwork {
  MILKOMEDA = 'MILKOMEDA',
}

export type NetworkInfo = {
  id: SupportedNetwork
  route: string
  name: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
}

export const milkomedaNetworkOptions: NetworkInfo = {
  id: SupportedNetwork.MILKOMEDA,
  route: '',
  name: 'Milkomeda',
  bgColor: '#00071A',
  primaryColor: '#ff0000',
  secondaryColor: '#00ff00',
  imageURL: '/images/milkomeda-logo.png',
};

export const mappedSupportedNetworks: NetworkInfo[] = [milkomedaNetworkOptions];

export const getNetworkOptions = (network: SupportedNetwork) => {
  const foundedNetwork = mappedSupportedNetworks.find((item) => item.id === network);
  if (!foundedNetwork) throw new Error(`not found mapped network for network: "${network}"`);
  return foundedNetwork;
};
