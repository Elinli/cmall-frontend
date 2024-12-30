import { RouteObject } from 'react-router-dom'
import Permission from '@/components/LayoutContainer/Permission'
import LayoutContainer from '@/components/LayoutContainer'
import Home from '@/views/home'
import Login from '@/views/login'

import Error from '@/components/Error'
export interface ExtraObject {
  title?: string
  isShow?: boolean
  children?: ChatRouter
}

export type ChatRouter = Array<RouteObject & ExtraObject>

const router: ChatRouter = [
  {
    path: '/home',
    element: <Home />,
    title: '首页',
  },
  {
    path: '/login',
    element: <Login />,
    title: '登录',
  },

  {
    path: '/',
    element: (
      <Permission>
        <LayoutContainer></LayoutContainer>
      </Permission>
    ),
    title: '主页',
    children: [
      // {
      //   path: '/chat',
      //   element: <Chat />,
      //   title: '即时通讯',
      // },
      // {
      //   path: '/system',
      //   title: '系统管理',
      //   children: [
      //     {
      //       path: '/system/menu',
      //       element: <Menu />,
      //       title: '菜单设置',
      //     },
      //     {
      //       path: '/system/role',
      //       element: <Role />,
      //       title: '角色管理',
      //     },
      //   ],
      // },
    ],
  },
  { path: '*', element: <Error /> },
]
// 用于异步加载
// export const childernRoutes: ChatRouter = [
//   {
//     path: '/dashboard',
//     // element: <DashBoard />,
//     title: '工作台',
//   },
//   {
//     path: '/chat',
//     // element: <Chat />,
//     title: '即时通讯',
//   },

//   {
//     path: '/system',
//     title: '系统管理',
//     children: [
//       {
//         path: '/system/menu',
//         // element: <Menu />,
//         title: '菜单设置',
//       },
//       {
//         path: '/system/role',
//         // element: <Role />,
//         title: '角色管理',
//       },
//       {
//         path: '/system/department',
//         // element: <Department />,
//         title: '部门管理',
//       },
//     ],
//   },
// ]
export default router
