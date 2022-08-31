import { useEffect } from 'react';
import { Layout } from 'antd';
import { useGetUserQuery } from '../../services/rtk.api';
import { useAppDispatch } from '../../redux/hook';
import { setUser } from '../../redux/slices/userSlice';

const { Sider } = Layout;

function SideMenu() {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetUserQuery(1);
  useEffect(() => {
    if (!error && !isLoading && data) {
      debugger;
      dispatch(setUser(data));
    }
  }, [data]);

  return (
    <Sider className="SideMenu" theme="light">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <h3>
          {data.name}
        </h3>
      ) : null}
    </Sider>
  );
}

export default SideMenu;
