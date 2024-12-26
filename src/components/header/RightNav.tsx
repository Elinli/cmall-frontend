import { Link } from 'react-router-dom'
import { NavTabs, NavType } from './config'
import { Popover } from 'antd'
const webSites = [
  {
    name: '会员',
    children: [
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
    ],
  },
  {
    name: '手机网站',
    children: [
      {
        name: 'vivo',
        path: '/taobao',
      },
      {
        name: '一加',
        path: '/jd',
      },
      {
        name: '魅族',
        path: '/pinduoduo',
      },
      {
        name: 'apple',
        path: '/163',
      },
      {
        name: '小米',
        path: '/163',
      },
      {
        name: '小米',
        path: '/163',
      },
      {
        name: '小米',
        path: '/163',
      },
      {
        name: '小米',
        path: '/163',
      },
      {
        name: '小米',
        path: '/163',
      },
      {
        name: '小米',
        path: '/163',
      },
    ],
  },
  {
    name: '图书网站',
    children: [
      {
        name: '遮天',
        path: '/taobao',
      },
      {
        name: '完美世界',
        path: '/jd',
      },
      {
        name: '长生界',
        path: '/pinduoduo',
      },
      {
        name: '风云',
        path: '/163',
      },
      {
        name: '射雕英雄传',
        path: '/163',
      },
      {
        name: '舍得',
        path: '/163',
      },
      {
        name: '人在异界挨板砖',
        path: '/163',
      },
      {
        name: '无名的人啊',
        path: '/163',
      },
    ],
  },
  {
    name: '增值服务',
    children: [
      {
        name: '遮天',
        path: '/taobao',
      },
      {
        name: '完美世界',
        path: '/jd',
      },
      {
        name: '长生界',
        path: '/pinduoduo',
      },
      {
        name: '风云',
        path: '/163',
      },
      {
        name: '射雕英雄传',
        path: '/163',
      },
      {
        name: '舍得',
        path: '/163',
      },
      {
        name: '人在异界挨板砖',
        path: '/163',
      },
      {
        name: '无名的人啊',
        path: '/163',
      },
    ],
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
    className: 'w-1/2',
    children: (
      <div>
        <div className="flex gap-8 flex-wrap">
          {webSites.map((site) => (
            <div key={site.name}>
              <div className="text-base font-bold">{site.name}</div>
              <div className="flex flex-col gap-1 mt-3 max-h-[180px] flex-wrap">
                {site.children.map((child) => (
                  <Link
                    to={child.path}
                    key={child.name}
                    className="text-min hover:text-blue-500 h-6 mr-4"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
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
          arrow={false}
          overlayClassName={`custom-popover ${navTab.className}`}
          key={navTab.name}
          placement="bottomRight"
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
