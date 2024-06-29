import { Outlet } from "react-router-dom"
import StoreHeader from "../components/StoreHeader"
import heroGIF from '../assets/cline-store/Header.gif'

const StoreLayout = () => {
  return (
    <>
      <StoreHeader />
      <img src={heroGIF} alt="Hero" className="w-full" />
      <Outlet />
    </>
  );
};

export default StoreLayout;
