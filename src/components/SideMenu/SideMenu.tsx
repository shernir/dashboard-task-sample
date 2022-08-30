import { useEffect } from 'react';
import { Layout } from 'antd';
import { useGetUserQuery } from '../../services/rtk.api';

const { Sider } = Layout;

function SideMenu() {
  const { data, error, isLoading } = useGetUserQuery(1);
  useEffect(() => {
    console.log(data?.address.geo);
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
