import { Layout } from 'antd'

const { Header } = Layout
import { AntDesignOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import LDropdown from './LDropdown'

export default function LHeader() {
  return (
    <>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
        className="flex justify-end"
      >
        <Avatar size={'small'} icon={<AntDesignOutlined />} className="mr-4" />

        <LDropdown></LDropdown>
      </Header>
    </>
  )
}
