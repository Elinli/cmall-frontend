// src/services/userService.ts

import apiClient from '../utils/request'

export const exportExcelFile = async (): Promise<Blob> => {
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
