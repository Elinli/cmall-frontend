import { useState } from 'react'

import { Layout, theme } from 'antd'
const { Content, Footer } = Layout
import RouterView from '@/components/LayoutContainer/RouterView'
import { Props } from '@/types/router'
import LayoutSider from './widgets/LSider'
import Icon from '../IconFont'
import LBreadcrumb from './widgets/LBreadcrumb'
import LHeader from './widgets/LHeader'

export default function LayoutContainer({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSider
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      ></LayoutSider>
      <Layout className="LayoutContainer-container">
        <LHeader></LHeader>
        <Content style={{ margin: '0 16px' }} className="here">
          <LBreadcrumb></LBreadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            className="content-box scroll"
          >
            <Icon
              icon={'DesktopOutlined'}
              className="mr-2 text-2xl font-bold text-blue-700"
            />
            Hello
            {children}
            <RouterView></RouterView>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Reny Cmall ©{new Date().getFullYear()} Created by Eli Shi
        </Footer>
      </Layout>
    </Layout>
  )
}
