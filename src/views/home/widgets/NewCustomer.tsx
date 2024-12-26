import b1 from '@/assets/images/banner/1.png'
import { DoubleRightOutlined } from '@ant-design/icons'

export default function NewCustomer() {
  return (
    <div className="p4 ml-40 mr-40 h-52 bg-white mt-10 hover:shadow-full rounded">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">新人有利 福利专区</h1>
        <div className="cursor-pointer text-gray-500 text-min font-semibold">
          领 40 元新人礼包 <DoubleRightOutlined />
        </div>
      </div>
      <div className="flex justify-between w-full mt-6 pl-16 pr-16 cursor-pointer">
        {[1, 2, 3, 4].map((item) => (
          <div className="flex w-52 h-28 items-center">
            <img src={b1} alt="" className="w-36" />
            <div className="mt-4">
              <span className="tag text-min bg-gray-100 rounded p-1 flex flex-nowrap">
                限购一件
              </span>
              <span className="text-gray-700 text-base font-semibold mt-2">
                ${3043 * item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
