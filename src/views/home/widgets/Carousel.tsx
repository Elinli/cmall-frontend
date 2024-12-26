import { Carousel as AntCarousel } from 'antd'
import b1 from '@/assets/images/b1.jpg'
import b2 from '@/assets/images/b2.jpg'
import b3 from '@/assets/images/b3.jpg'
import b4 from '@/assets/images/b4.jpg'
import b5 from '@/assets/images/b5.jpg'
import React, { useState } from 'react'

const images = [
  {
    alt: 'b1',
    imgSrc: b1,
  },
  {
    alt: 'b2',
    imgSrc: b2,
  },

  {
    alt: 'b3',
    imgSrc: b3,
  },
  {
    alt: 'b4',
    imgSrc: b4,
  },
  {
    alt: 'b5',
    imgSrc: b5,
  },
]
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '500px',
  color: '#fff',
  background: '#364d79',
}
interface LeftMenu {
  key: string
  label: string
  children: string | React.ReactNode
}
const leftMenu: LeftMenu[] = [
  {
    key: '1',
    label: 'Home',
    children: 'Home',
  },
  {
    key: '2',
    label: 'About',
    children: 'About',
  },
  {
    key: '3',
    label: 'Contact',
    children: 'Contact',
  },
]
export default function Carousel() {
  const [showChildren, setShowChildren] = useState(false)
  const [childern, setChildern] = useState<string | React.ReactNode>('')
  const handleMouseEnterItem = (item: LeftMenu) => () => {
    setChildern(item.children)
  }
  return (
    <div className="relative">
      <div className="absolute top-8 left-24 w-60 h-106 bg-redp z-20 rounded-sm">
        <div
          onMouseEnter={() => setShowChildren(true)}
          onMouseLeave={() => setShowChildren(false)}
          className="pt-4 pb-4 bg-gray-50"
        >
          {leftMenu.map((item) => (
            <div
              key={item.key}
              onMouseEnter={handleMouseEnterItem(item)}
              className="w-full h-9 hover:bg-white leading-9 cursor-pointer text-base indent-4"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      {showChildren && (
        <div
          className="absolute top-8 left-84 w-96 h-106 bg-redp z-20 rounded-sm p-4 transition duration-500 ease-in-out transform"
          onMouseEnter={() => setShowChildren(true)}
          onMouseLeave={() => setShowChildren(false)}
        >
          show children {childern}
        </div>
      )}
      <AntCarousel arrows infinite={true} autoplay fade={true}>
        {images.map((item) => (
          <div key={item.alt}>
            <img src={item.imgSrc} alt={item.alt} style={contentStyle}></img>
          </div>
        ))}
      </AntCarousel>
    </div>
  )
}
