import { Link } from 'react-router-dom'
import { NavTabs, NavType } from './config'
import { Popover } from 'antd'
const webSites = [
  {
    name: '淘宝',
    path: '/taobao',
  },
  {
    name: '京东',
    path: '/jd',
  },
  {
    name: '拼多多',
    path: '/pinduoduo',
  },
  {
    name: '网易云',
    path: '/163',
  },
]
const rightNavTabs: NavTabs = [
  {
    name: '请登录',
    path: '/login',
    type: NavType.NAV,
  },
  {
    name: '注册',
    path: '/login',
    type: NavType.NAV,
  },
  {
    name: '我的订单',
    path: '/shopcode',
    type: NavType.NAV,
  },
  {
    name: '联系客服',
    path: '/bussiess',
    type: NavType.NAV,
  },
  {
    name: '网站导航',
    path: '/select',
    type: NavType.SELECT,
    className: 'w-60',
    children: (
      <div>
        <div className="flex gap-2 flex-wrap">
          {webSites.map((site) => (
            <Link to={site.path} key={site.name}>
              {site.name}
            </Link>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: '购物车',
    children: (
      <div>
        我是购物车哦
        <p>商品1</p>
      </div>
    ),
    type: NavType.SELECT,
    className: 'w-48',
  },
]
export default function RightNav() {
  const elements = rightNavTabs.map((navTab) => {
    if (navTab.type === NavType.NAV) {
      return (
        <div
          className={`text-min cursor-pointer leading-10 h-full pl-2 pr-2 ${navTab.type === NavType.NAV ? 'hover:text-white ' : 'hover:bg-white hover:text-gray-950'}`}
          key={navTab.name}
        >
          {navTab.name}
        </div>
      )
    } else {
      return (
        <Popover
          content={navTab.children}
          title={navTab.name}
          arrow={false}
          overlayClassName={`custom-popover ${navTab.className}`}
          key={navTab.name}
        >
          <div
            className={`text-min cursor-pointer leading-10 h-full pl-2 pr-2 ${navTab.type !== NavType.SELECT ? 'hover:text-white ' : 'hover:bg-white hover:text-gray-950'}`}
            key={navTab.name}
          >
            {navTab.name}
          </div>
        </Popover>
      )
    }
  })
  return <div className="flex gap-1 mr-10">{elements}</div>
}
