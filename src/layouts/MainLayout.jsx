import ClientNav from '@components-global/ClientNav';
import ClientFooter from '@components-global/ClientFooter';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <ClientNav />
      <Outlet />
      <ClientFooter />
    </>
  );
};

export default MainLayout;
