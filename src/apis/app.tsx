// src/services/userService.ts
// import apiClient from '../utils/request'
import { MenuResponse } from '@/types/api/system'
import { User } from '@/types/api/user'
type MenuRequest = Pick<User, 'id'>
export const fetchMenuList = async ({
  id,
}: MenuRequest): Promise<MenuResponse[]> => {
  //   const response = await apiClient.get('/api/system/menus')
  //   return response.data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          user_id: id,
          order: 1,
          title: '工作台',
          type: 'MENU',
          createdAt: '2023-07-01',
          parentId: null,
          path: '/dashboard',
          icon: 'HomeOutlined',
        },
        {
          id: '2',
          order: 1,
          title: '即时通讯',
          type: 'MENU',
          createdAt: '2023-07-01',
          parentId: null,
          path: '/chat',
          icon: 'MessageOutlined',
        },

        {
          id: '3',
          order: 3,
          title: '系统管理',
          type: 'MENU',
          createdAt: '2023-07-01',
          parentId: null,
          path: '/system',
          icon: 'DesktopOutlined',
          children: [
            {
              id: '4',
              order: 1,
              title: '菜单管理',
              type: 'MENU',
              createdAt: '2023-07-01',
              parentId: 3,
              path: '/system/menu',
            },
            {
              id: '5',
              order: 2,
              title: '角色管理',
              type: 'MENU',
              createdAt: '2023-07-01',
              parentId: 3,
              path: '/system/role',
            },
            {
              id: '6',
              order: 3,
              title: '部门管理',
              type: 'MENU',
              createdAt: '2023-07-01',
              parentId: 3,
              path: '/system/department',
            },
            {
              id: '7',
              order: 4,
              title: '成员管理',
              type: 'MENU',
              createdAt: '2023-07-01',
              parentId: 3,
              path: '/system/member',
            },
          ],
        },
      ])
    })
  })
}
