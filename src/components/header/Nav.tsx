import { NavTabs, NavType } from './config'
import RightNav from './RightNav'

const navTabs: NavTabs = [
  {
    name: '首页',
    path: '/home',
    type: NavType.NAV,
  },
  {
    name: '消费者业务网站',
    path: '/brand',
    type: NavType.NAV,
  },
  {
    name: '优购码',
    path: '/shopcode',
    type: NavType.NAV,
  },
  {
    name: '企业商用',
    path: '/bussiess',
    type: NavType.NAV,
  },
  {
    name: 'Select Region',
    path: '/select',
    type: NavType.NAV,
  },
  {
    name: '更多精彩',
    children: [],
    type: NavType.SELECT,
  },
]

export default function Nav() {
  return (
    <div className="flex pl-20 h-10 pr-20 bg-black text-white/50 items-center justify-between">
      <div className="flex h-full">
        {navTabs.map((item) => (
          <div
            key={item.name}
            className={`ml-2 text-min cursor-pointer leading-10 h-full pl-2 pr-2 ${item.type === NavType.SELECT ? 'hover:bg-white hover:text-gray-950' : 'hover:text-white '}`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <RightNav></RightNav>
    </div>
  )
}
