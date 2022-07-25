import MILKOMEDA_LOGO_URL from '../assets/images/milkomeda-logo.png'
import { blockClient, client } from '../apollo/client'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

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
  blurb?: string
  //TODO перевести на одну схему, как будет бэк
  client: ApolloClient<NormalizedCacheObject>
  blockClient: ApolloClient<NormalizedCacheObject>
  healthCheckName: string
  etherscanLinkPrefix: string
}

//TODO поправить опции в соответсвии с дизайном
export const milkomedaNetworkOptions: NetworkInfo = {
  id: SupportedNetwork.MILKOMEDA,
  route: '',
  name: 'Milkomeda',
  bgColor: '#fc077d',
  primaryColor: '#fc077d',
  secondaryColor: '#2172E5',
  imageURL: MILKOMEDA_LOGO_URL,
  client: client,
  blockClient: blockClient,
  healthCheckName: 'uniswap/uniswap-v3',
  //TODO стоит ли держать в опциях?
  etherscanLinkPrefix: 'https://',
}

export const mappedSupportedNetworks: NetworkInfo[] = [milkomedaNetworkOptions]

export const getNetworkOptions = (network: SupportedNetwork) => {
  const foundedNetwork = mappedSupportedNetworks.find((item) => item.id === network)
  if (!foundedNetwork) throw new Error(`not found mapped network for network: "${network}"`)
  return foundedNetwork
}
