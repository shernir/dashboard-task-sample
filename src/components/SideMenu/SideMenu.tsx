import { Layout } from 'antd';
import UserMetaData from '../UserMetaData/UserMetaData';
import './SideMenu.scss';
import Navigation from '../Navigation/Navigation';

const { Sider } = Layout;

function SideMenu() {
  return (
    <Sider
      className="SideMenu" data-testid="side-menu"
      theme="light">
      <UserMetaData />
      <Navigation />
    </Sider>
  );
}

export default SideMenu;
