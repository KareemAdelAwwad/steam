import ClientNav from "../components/ClientNav.jsx";
import ClientFooter from "../components/Footer.jsx";
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
