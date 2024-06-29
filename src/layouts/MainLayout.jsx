import { Outlet } from "react-router-dom";
import ClientNav from "../components/ClientNav";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <ClientNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
