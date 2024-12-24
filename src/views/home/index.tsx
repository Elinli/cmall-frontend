import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      Home
      <div className="App">
        <header className="App-header">
          <p>Hello Vite + React</p>
          <p>
            <button onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
        </header>
      </div>
    </div>
  )
}
