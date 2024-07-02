import ClientNav from "../components/ClientNav";
import Footer from "@components/Footer";
import { Outlet } from "react-router-dom";

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
