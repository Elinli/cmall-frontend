import { useAppStore } from '@/store'
import { DownOutlined, SettingOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, message, Space } from 'antd'
import { useNavigate } from 'react-router'

const items: MenuProps['items'] = [
  {
    key: 'PERSONAL_HOME',
    label: '个人主页',
  },
  {
    type: 'divider',
  },
  {
    key: 'UPDATE_PWD',
    label: '修改密码',
    // extra: '⌘P',
  },
  {
    key: 'SIGN_OUT',
    label: '注销登录',
    // extra: '⌘B',
  },
  {
    key: 'SYSTEM_SETTING',
    label: '系统设置',
    icon: <SettingOutlined />,
    // extra: '⌘S',
  },
]

export default function LDropdown() {
  const navigate = useNavigate()
  const setToken = useAppStore((state) => state.setToken)
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'SIGN_OUT') {
      setToken('')
      localStorage.removeItem('token')
      navigate('/login')
    } else {
      message.info(`Click on item ${key}`)
    }
  }
  return (
    <div>
      {' '}
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Eli Shi
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}
