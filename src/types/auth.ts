export interface LoginReqPayload {
  username: string
  password: string
}

export interface LoginResPayload {
  access_token: string
  token_type: string
}
