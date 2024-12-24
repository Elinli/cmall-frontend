import { useState } from 'react'
import reactLogSec from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import reactLogSec from '@/assets/react.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="text-center">
          <header className="bg-#282c34 min-w-100vw min-h-100vh flex flex-col items-center justify-center color-white">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogSec} className="logo react" alt="React logo" />
            </a>
            <h1 className="mt-2em animate-bounce-alt animate-duration-2s">
              Hello Vite + React!
            </h1>
            <p>
              <button
                className="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600"
                type="button"
                onClick={() => setCount((count) => count + 1)}
              >
                count is: {count}
              </button>

              <button
                bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
                text="sm white"
                font="mono light"
                p="y-2 x-4"
                m="l-1em"
                border="2 rounded blue-200"
                type="button"
                onClick={() => setCount((count) => count + 1)}
              >
                count is: {count}
              </button>
            </p>
            <p>
              Edit <code>App.tsx</code> and save to test HMR updates.
            </p>
          </header>
        </div>
        <div className="h-8 w-8 text-green-600">heelo</div>
      </div>
    </>
  )
}

export default App
