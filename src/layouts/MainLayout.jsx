import ClientNav from '@components/ClientNav';
import ClientFooter from '@components/ClientFooter';
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
