import { Menu } from 'antd';
import { AppstoreOutlined, BarChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { routes } from '../../enums/routes.enum';

const items = [
  {
    label: <Link to={routes.dashboard}>Dashboard</Link>,
    key: 'dashboard',
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to={routes.report}>Report</Link>,
    key: 'report',
    icon: <BarChartOutlined />,
  },
];
function Navigation() {
  return (
    <Menu items={items} />

  );
}

export default Navigation;
