import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  PicCenterOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import "./style.scss";

const { Header, Sider, Content } = Layout;

const LayoutContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return <Layout>
  <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '1',
          icon: <PicCenterOutlined />,
          label: 'Habitaciones'
        },
        {
          key: '2',
          icon: <UnorderedListOutlined/>,
          label: 'Reservas'
        }
      ]}
    />
  </Sider>
  <Layout className="site-layout">
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed)
      })}
    </Header>
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280
      }}
    >
      Content
    </Content>
  </Layout>
</Layout>;
};

export default LayoutContainer;
