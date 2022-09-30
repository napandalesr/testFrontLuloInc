import React, { useState, Suspense } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Layout, Menu, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';

import Routes from "../../Routes";

import "./style.scss";
import { _Routes } from "../../Utils/constanst";

const { Header, Sider, Content } = Layout;

const LayoutContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const Nav = (ruta: string): void => {
    navigate(ruta);
  };

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
          icon: <HomeOutlined />,
          label: 'Habitaciones',
          onClick: () => Nav(_Routes.Home)
        },
        {
          key: '2',
          icon: <UnorderedListOutlined/>,
          label: 'Reservas',
          onClick: () => Nav(_Routes.List)
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
        <Suspense fallback={<Spin size="large" />}>
          <Routes/>
        </Suspense>
      </Content>
    </Layout>
  </Layout>;
};

export default LayoutContainer;
