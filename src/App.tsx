// 修正路径
import './App.css'
import router from './router'
import { useRoutes } from 'react-router-dom' // 使用 Routes 和 Route

function App() {
  const element = useRoutes(router)
  return (
    <div className="app-container w-full h-full overflow-x-hidden overflow-y-auto">
      {element}
    </div>
  )
}

export default App
