// src/types/api.ts
export interface User {
  id: string
  email: string
  fullname: string
  role: string
  created_at: string
  updated_at: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  fullname: string
}

export interface LoginResponse {
  token: string
  user: User
}

export interface RegisterResponse {
  id: string
  email: string
  fullname: string
  role: string
  created_at: string
  token: string
}
