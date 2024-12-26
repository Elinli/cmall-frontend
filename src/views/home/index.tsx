import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Carousel from './widgets/Carousel'
import Banner from './widgets/Banner'
import NewCustomer from './widgets/NewCustomer'

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col h-full">
      <Header></Header>
      <div className="main-container flex-grow min-h-fit bg-gray-50">
        <Carousel />
        <Banner />
        <Banner />
        <NewCustomer />
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </div>
      <Footer></Footer>
    </div>
  )
}
