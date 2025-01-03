// src/api/user.ts
import apiClient from '../utils/request'
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../types/api/user'

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/api/signin', data)
  return response.data
}

export const register = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  const response = await apiClient.post<RegisterResponse>('/api/signup', {
    ...data,
    workspace: 'devp',
  })
  return response.data
}
