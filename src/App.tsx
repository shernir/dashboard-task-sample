import './App.scss';
import { Layout } from 'antd';
import SideMenu from './components/SideMenu/SideMenu';
import Header from './components/Header/Header';

const { Content } = Layout;

function App() {
  return (
    <Layout className="App">
      <SideMenu />
      <Layout>
        <Header />
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
}

export default App;
