import { Navigate, RouteObject } from 'react-router-dom'
import Home from '../../views/home'
import Login from '../../views/login'
import Chat from '../../views/chat' // 新增导入

export interface ExtraObject {
  title?: string
  isShow?: boolean
}

export type ChatRouter = Array<RouteObject & ExtraObject>

const router: ChatRouter = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
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
    path: '/chat',
    element: <Chat />,
    title: '聊天',
  },
]

export default router
