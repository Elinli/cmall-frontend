import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import Logo from '@/assets/logo.svg'

import Icon from '@/components/IconFont'
import { useAppStore } from '@/store'
import { MenuType } from '@/types/api/system'
import { useEffect, useState } from 'react'
type MenuItem = Required<MenuProps>['items'][number]
const { Sider } = Layout
function setMenuItem(
  label: React.ReactNode,
  key?: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

// 定义组件的 Props 类型
interface LayoutSiderProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

type MenuClickEvent = Parameters<Required<MenuProps>['onClick']>[0]
function generateMenus(menus: MenuType[]): MenuItem[] {
  return menus.map((menu) => {
    if (menu.children && menu.children.length > 0) {
      return setMenuItem(
        menu.title,
        menu.path,
        <Icon icon={menu.icon} />,
        generateMenus(menu.children),
      )
    } else {
      return setMenuItem(menu.title, menu.path, <Icon icon={menu.icon} />)
    }
  })
}
export default function LayoutSider({
  collapsed,
  setCollapsed,
}: LayoutSiderProps) {
  const navigate = useNavigate()
  const handleClickMenu = ({ key, keyPath }: MenuClickEvent): void => {
    navigate(key)
    setSelectedKey(keyPath)
  }
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const selectedKey = useAppStore((state) => state.selectedKey)
  const setSelectedKey = useAppStore((state) => state.setSelectedKey)
  const menus = useAppStore((state) => state.menus)
  useEffect(() => {
    const formatMenus = generateMenus(menus)
    setMenuItems(formatMenus)
  }, [menus])
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          className={`demo-logo-vertical pl-6 h-16 flex items-center transition-opacity duration-50 ${!collapsed ? 'custom-logo' : ''}`}
        >
          <img src={Logo} alt="logo" className="w-[32px]" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={selectedKey}
          defaultOpenKeys={selectedKey}
          mode="inline"
          items={menuItems}
          onClick={handleClickMenu}
        />
      </Sider>
    </>
  )
}
