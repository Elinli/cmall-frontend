// src/services/roleService.ts
import {
  RoleRequest,
  RoleResponse,
  CreateRoleRequest,
  RoleResponseType,
  UpdateRoleRequest,
} from '@/types/api/role'
import apiClient from '../utils/request'
import { Pagination } from '@/types/app'

export const fetchRoleList = async (
  params: RoleRequest & Pagination,
): Promise<RoleResponseType> => {
  const response = await apiClient.get<RoleResponseType>('/api/v1/role', {
    params,
  })
  return response.data as RoleResponseType
}

export const createRole = async (
  data: CreateRoleRequest,
): Promise<RoleResponse> => {
  const response = await apiClient.post<RoleResponse>('/api/v1/role', data)
  return response.data
}

export const deleteRole = async (id: string): Promise<RoleResponse> => {
  const response = await apiClient.delete<RoleResponse>(`/api/v1/role/${id}`)
  return response.data
}
export const updateRole = async (
  data: UpdateRoleRequest,
): Promise<RoleResponse> => {
  const response = await apiClient.post<RoleResponse>(
    `/api/v1/role/${data.id}`,
    data,
  )
  return response.data
}

export const exportRoles = async (): Promise<Blob> => {
  const response = await apiClient.post<Blob>(
    '/api/v1/file/export',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'blob',
    },
  )
  return response.data
}

export const exportRoleExcelFile = async (): Promise<Blob> => {
  const response = await apiClient.post<Blob>(
    '/api/v1/role/export',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'blob',
    },
  )
  return response.data
}
