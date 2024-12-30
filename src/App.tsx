// 修正路径
import { useEffect } from 'react'
import './App.css'
import router, { ChatRouter } from './router'
import { useRoutes } from 'react-router-dom' // 使用 Routes 和 Route
import { useLocation, useNavigate } from 'react-router'
import { LazyLoad } from './components/LazyLoad'
import { useAppStore } from './store'
import { MenuResponse } from './types/api/system'

function generateRoutes(routes: MenuResponse[]): ChatRouter[] {
  return routes.map((item: MenuResponse) => {
    if (item.children) {
      return {
        ...item,
        children: item.children.map((item: MenuResponse) => {
          return {
            ...item,
            element: LazyLoad(item.path),
          }
        }),
      }
    }
    return {
      ...item,
      element: LazyLoad(item.path),
    }
  }) as unknown as ChatRouter[]
}
function App() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const menus = useAppStore((state) => state.menus)

  const element = useRoutes(router)
  useEffect(() => {
    new Promise((resolve) => {
      resolve(true)
    }).then((res) => {
      const childerns = generateRoutes(menus)
      router.forEach((item) => {
        if (item.path === '/') {
          item.children = childerns
        }
      })
      if (res) {
        navigate(pathname)
      }
    })
  }, [menus, navigate, pathname])
  return (
    <div className="app-container w-full h-full overflow-x-hidden overflow-y-auto">
      {element}
    </div>
  )
}

export default App
