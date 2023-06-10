interface UserBase {
  email: string
}

export interface User extends UserBase {
  id: string
  is_active: boolean
  is_superuser: boolean
  is_verified: boolean
}

export interface UserCreate extends UserBase {
  password: string
}
