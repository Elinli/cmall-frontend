// src/types/api.ts
export interface User {
  id: string
  email: string
  fullname: string
  role?: string
  created_at: string
}

export interface LoginRequest {
  email: string
  password: string
}
export type RegisterRequest = Omit<LoginRequest, 'fullname'>

export interface LoginResponse {
  token: string
  user?: User
}

export type RegisterResponse = Pick<LoginResponse, 'token'>
