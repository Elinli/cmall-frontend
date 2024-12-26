import Nav from './Nav'
import LogoImg from '@/assets/images/huawei_logo.png'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'

export default function Header() {
  const [inputShow, setInputShow] = useState(false)
  const history = [1]
  return (
    <>
      <Nav></Nav>
      <div className="h-16 min-h-16 w-full bg-white flex items-center pl-48 pr-48 justify-between">
        <img src={LogoImg} alt="" className="w-28" />
        {inputShow && (
          <div className="w-120 pl-10 pr-10 max-h-80 relative z-20">
            <div className="relative ">
              <input
                type="text"
                className="outline-none w-106 h-9 rounded-3xl bg-gray-100 indent-10 text-sm"
                placeholder="搜索商品"
              />
              <SearchOutlined className="absolute left-3 top-2 text-base mt-0.5 text-gray-700" />
              <CloseOutlined
                className="absolute right-2 top-2 text-sm text-gray-700 mt-0.5 cursor-pointer"
                onClick={() => setInputShow(false)}
              />
            </div>
            <div
              className={`absolute top-10 left-0 w-120 bg-white  rounded-md p-4 ${history.length > 0 ? 'h-72' : 'h-48'}`}
            >
              <div
                className={`serach-history mt-4 ${history.length === 0 ? 'hidden' : ''}`}
              >
                <span className=" text-lg">搜索历史</span>
                <div className="flex flex-wrap gap-2 text-min mt-2">
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    华为手机Mate70 Pro
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    平板电脑
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    智能配件
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    非凡大师
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">耳机</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    Mate70 Pro
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">平板</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    智能配件
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    非凡大师系列
                  </span>
                </div>
              </div>

              <div className="guess-yours mt-4">
                <span className=" text-lg">猜你想搜</span>
                <div className="flex flex-wrap gap-2 text-min mt-2">
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    华为手机Mate70 Pro
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    平板电脑
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    智能配件
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    非凡大师
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">耳机</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    Mate70 Pro
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">平板</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    智能配件
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    非凡大师系列
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <SearchOutlined
          className={`text-2xl text-gray-700 cursor-pointer ${inputShow ? 'invisible' : 'visible '} }`}
          onClick={() => setInputShow(!inputShow)}
        />
      </div>
    </>
  )
}
