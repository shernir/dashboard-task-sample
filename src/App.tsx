import './App.scss';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu/SideMenu';
import Header from './components/Header/Header';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ReportPage from './pages/ReportPage/ReportPage';
import { routes } from './enums/routes.enum';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="App">
        <SideMenu />
        <Layout>
          <Header />
          <Content>
            <Routes>
              <Route path={routes.dashboard} element={<DashboardPage />} />
              <Route path={routes.report} element={<ReportPage />} />
              <Route path="/" element={<DashboardPage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
