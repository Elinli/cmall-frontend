// src/services/userService.ts
import {
  MemberRequest,
  MemberResponse,
  CreateMemberRequest,
  MemberResponseType,
  UpdateMemberRequest,
} from '@/types/api/member'
import apiClient from '../utils/request'
import { Pagination } from '@/types/app'

export const fetchMemberList = async (
  params: MemberRequest & Pagination,
): Promise<MemberResponseType> => {
  const response = await apiClient.get<MemberResponseType>('/api/v1/user', {
    params,
  })
  return response.data as MemberResponseType
}

export const createMember = async (
  data: CreateMemberRequest,
): Promise<MemberResponse> => {
  const response = await apiClient.post<MemberResponse>('/api/v1/user', data)
  return response.data
}

export const deleteMember = async (id: string): Promise<MemberResponse> => {
  const response = await apiClient.delete<MemberResponse>(`/api/v1/user/${id}`)
  return response.data
}
export const updateMember = async (
  data: UpdateMemberRequest,
): Promise<MemberResponse> => {
  const response = await apiClient.post<MemberResponse>(
    `/api/v1/user/${data.id}`,
    data,
  )
  return response.data
}

export const exportMembers = async (): Promise<Blob> => {
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

export const exportMemberExcelFile = async (): Promise<Blob> => {
  const response = await apiClient.post<Blob>(
    '/api/v1/user/export',
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
