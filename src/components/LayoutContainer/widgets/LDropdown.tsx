import { DownOutlined, SettingOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, message, Space } from 'antd'

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
    extra: '⌘P',
  },
  {
    key: 'SIGN_OUT',
    label: '注销登录',
    extra: '⌘B',
  },
  {
    key: 'SYSTEM_SETTING',
    label: '系统设置',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
]
const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`)
}
export default function LDropdown() {
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
