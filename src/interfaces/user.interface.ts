export interface CreateUserInterface {
    accountId: string,
    username: string,
    password: string,
    email: string,
    status?: string,
    permissions: [
      {
        accountId: string,
        roles: [
          string
        ]
      }
    ]
  }
