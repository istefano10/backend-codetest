export interface ActivateAssetInterface {
  accountId: string,
  subscription: {
    subscriberAccountId: string,
    productId: string,
    startTime?: string,
    ipPools?: [
      {
        carrier?: string,
        poolId?: string
      }
    ]
  }
}
