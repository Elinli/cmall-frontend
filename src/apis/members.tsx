// src/services/userService.ts
// import apiClient from '../utils/request'
import { MemberRequest, MemberResponse } from '@/types/api/member'

export const fetchMemberList = async (
  params: MemberRequest,
): Promise<MemberResponse[]> => {
  //   const response = await apiClient.get('/api/system/menus')
  //   return response.data
  return new Promise((resolve) => {
    setTimeout(() => {
      // 这里可以根据 params 进行过滤，这里仅作示例
      const mockData: MemberResponse[] = [
        {
          id: '1',
          name: '张三丰',
          roles: [1, 3],
          createdAt: '2024-01-31',
        },
        {
          id: '2',
          name: '历丰田',
          roles: [1, 1],
          createdAt: '2024-05-31',
        },
        {
          id: '3',
          name: '关羽',
          roles: [1, 1],
          createdAt: '2024-05-31',
        },
        {
          id: '4',
          name: '贾诩',
          roles: [1, 1],
          createdAt: '2024-05-31',
        },
      ]

      // 根据 params 进行过滤
      const filteredData = mockData.filter((member) => {
        if (params.username && member.name !== params.username) return false
        if (params.email && member.email !== params.email) return false
        // 其他字段的过滤逻辑
        return true
      })

      resolve(filteredData)
    }, 3000)
  })
}
