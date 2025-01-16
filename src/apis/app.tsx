// src/services/userService.ts
// import apiClient from '../utils/request'
import { MenuType } from '@/types/api/system'
import { User } from '@/types/api/user'
type MenuRequest = Pick<User, 'id'>
export const fetchMenuList = async ({
  id,
}: MenuRequest): Promise<MenuType[]> => {
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
          type: 'menu',
          createdAt: '2023-07-01',
          parentId: null,
          path: '/dashboard',
          icon: 'HomeOutlined',
        },
        {
          id: '2',
          order: 1,
          title: '即时通讯',
          type: 'menu',
          createdAt: '2023-07-01',
          parentId: null,
          path: '/chat',
          icon: 'MessageOutlined',
        },

        {
          id: '3',
          order: 3,
          title: '系统管理',
          type: 'menu',
          createdAt: '2023-07-01',
          parentId: null,
          path: '/system',
          icon: 'DesktopOutlined',
          children: [
            {
              id: '4',
              order: 1,
              title: '菜单管理',
              type: 'menu',
              createdAt: '2023-07-01',
              parentId: 3,
              path: '/system/menu',
            },
            {
              id: '5',
              order: 2,
              title: '角色管理',
              type: 'menu',
              createdAt: '2023-07-01',
              parentId: 3,
              path: '/system/role',
            },
            {
              id: '6',
              order: 3,
              title: '部门管理',
              type: 'menu',
              createdAt: '2023-07-01',
              parentId: 3,
              path: '/system/department',
            },
            {
              id: '7',
              order: 4,
              title: '成员管理',
              type: 'menu',
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

export const fetchAllMenuList = async ({
  id,
}: MenuRequest): Promise<MenuType[]> => {
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
          type: 'menu',
          createdAt: '2023-07-01',
          parentId: null,
          path: '/dashboard',
          icon: 'HomeOutlined',
        },
        {
          id: '2',
          order: 1,
          title: '即时通讯',
          type: 'menu',
          createdAt: '2023-07-01',
          parentId: null,
          path: '/chat',
          icon: 'MessageOutlined',
        },

        {
          id: '3',
          order: 3,
          title: '系统管理',
          type: 'menu',
          createdAt: '2023-07-01',
          parentId: null,
          path: '/system',
          icon: 'DesktopOutlined',
          children: [
            {
              id: '4',
              order: 1,
              title: '菜单管理',
              type: 'menu',
              createdAt: '2023-07-01',
              parentId: 3,
              path: '/system/menu',
              children: [
                {
                  id: '8',
                  order: 1,
                  title: '编辑',
                  type: 'button',
                  createdAt: '2023-07-01',
                  parentId: 4,
                },
                {
                  id: '9',
                  order: 2,
                  title: '新增',
                  type: 'button',
                  createdAt: '2023-07-01',
                  parentId: 4,
                },
              ],
            },
            {
              id: '5',
              order: 2,
              title: '角色管理',
              type: 'menu',
              createdAt: '2023-07-01',
              parentId: 3,
              path: '/system/role',
              children: [
                {
                  id: '10',
                  order: 1,
                  title: '编辑',
                  type: 'link',
                  createdAt: '2023-07-01',
                  parentId: 5,
                },
                {
                  id: '11',
                  order: 2,
                  title: '新增',
                  type: 'link',
                  createdAt: '2023-07-01',
                  parentId: 5,
                },
              ],
            },
            {
              id: '6',
              order: 3,
              title: '部门管理',
              type: 'menu',
              createdAt: '2023-07-01',
              parentId: 3,
              path: '/system/department',
            },
            {
              id: '7',
              order: 4,
              title: '成员管理',
              type: 'menu',
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
