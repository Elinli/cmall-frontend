// src/services/userService.ts
import apiClient from '../utils/request'
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../types/api'

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/auth/login', data)
  return response.data
}

export const register = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  const response = await apiClient.post<RegisterResponse>(
    '/auth/register',
    data,
  )
  return response.data
}
