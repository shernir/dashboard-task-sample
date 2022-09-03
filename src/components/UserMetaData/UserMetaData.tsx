import { useEffect } from 'react';
import { useGetUserQuery } from '../../services/rtk.api';
import avatar from '../../assets/images/avatar.png';
import './UserMetaData.scss';
import { useAppDispatch } from '../../redux/hook';
import { setUser } from '../../redux/slices/userSlice';

function UserMetaData() {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetUserQuery(1);

  // dispatch setUser action on data change
  useEffect(() => {
    if (!error && !isLoading && data) {
      dispatch(setUser(data));
    }
  }, [data]);
  return (
    <div className="UserMetaData">
      <div className="UserMetaData__avatar-container">
        <img
          src={avatar} alt="user-avatar"
          className="UserMetaData__avatar-container__avatar" />
      </div>
      <div className="UserMetaData__user-meta-data">
        <small data-testid="hello">Hello,</small>
        {!error ? (
          <p>
            {isLoading ? 'Loading...' : data?.name}
          </p>
        ) : <p data-testid="error-msg">Ops ! error has been occur</p>}
      </div>
    </div>
  );
}

export default UserMetaData;
