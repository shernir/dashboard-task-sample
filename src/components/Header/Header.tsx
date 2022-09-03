import './Header.scss';
import { ProfileOutlined, LogoutOutlined } from '@ant-design/icons';

function Header() {
  return (
    <header
      className="Header" data-testid="header-menu">
      <div className="Header__container">
        <div className="Header__container__item" data-testid="profile-icon">
          <ProfileOutlined className="Header__container__item__icon" label="Profile" />
          Profile
        </div>
        <div className="Header__container__item" data-testid="logout-icon">
          <LogoutOutlined className="Header__container__item__icon" label="Logout" />
          Logout
        </div>
      </div>
    </header>
  );
}

export default Header;
