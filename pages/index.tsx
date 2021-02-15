import { Layout, Menu } from 'antd';
import { useState } from 'react';
const { Header, Footer } = Layout;
import Calculator from '../components/calculator'
import Profiles from '../components/profiles';
export default function Home() {

  const [menu, setMenu] = useState('kalkulator')
  let content;
  switch (menu) {
    case 'kalkulator':
      content = <Calculator />
      break;
    case 'profile':
      content = <Profiles />
    default:
      break;
  }

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" onClick={(e) => setMenu(e.key.toString())} defaultSelectedKeys={[menu]}>
          <Menu.Item key="kalkulator">Kalkulator</Menu.Item>
          <Menu.Item key="profile">Profile</Menu.Item>
        </Menu>
      </Header>
      {content}
      <Footer style={{ textAlign: 'center' }}>Create By Devi Adi Nufriana</Footer>
    </Layout>
  )
}