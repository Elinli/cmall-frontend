import { useState } from 'react'

import { Layout, theme } from 'antd'
const { Content, Footer } = Layout
import RouterView from '@/components/LayoutContainer/RouterView'
import LayoutSider from './widgets/LSider'
import LBreadcrumb from './widgets/LBreadcrumb'
import LHeader from './widgets/LHeader'

export default function LayoutContainer() {
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
