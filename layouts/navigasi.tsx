import { Layout, Menu } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
const { Header, Footer } = Layout;

const Navigasi = ({ children, ...rest }) => {
  const router = useRouter();
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={(e) => router.push(e.key.toString())}
          defaultSelectedKeys={["/"]}
        >
          <Menu.Item key="/">Kalkulator</Menu.Item>
          <Menu.Item key="profile">Profile</Menu.Item>
        </Menu>
      </Header>
      {children}
      <Footer style={{ textAlign: "center" }}>
        Create By Devi Adi Nufriana
      </Footer>
    </Layout>
  );
};

export default Navigasi;
