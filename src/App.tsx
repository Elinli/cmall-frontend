// 修正路径
import { useEffect } from 'react'
import './App.css'
import router from './router'
import { useRoutes } from 'react-router-dom' // 使用 Routes 和 Route
import { useLocation, useNavigate } from 'react-router'

import { useAppStore } from './store'

import { generateRoutes } from './utils'

function App() {
  const navigate = useNavigate()
  const menus = useAppStore((state) => state.menus)
  const { pathname } = useLocation()
  const elements = useRoutes(router)
  document.title = import.meta.env.VITE_APP_TITLE
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="app-container w-full h-full overflow-x-hidden overflow-y-auto">
      {elements}
    </div>
  )
}

export default App
