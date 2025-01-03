// src/types/api.ts
export interface User {
  id: number
  dept_id: number
  email: string
  username: string
  phone: string
  roles: string[]
  created_time: string
  update_time: string
  status: string
}

export interface LoginRequest {
  email: string
  password: string
}
export type RegisterRequest = Omit<LoginRequest, 'username'>

export interface LoginResponse {
  token: string
  user?: User
}

export type RegisterResponse = Pick<LoginResponse, 'token'>
