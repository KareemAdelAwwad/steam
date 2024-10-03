import { Outlet } from "react-router-dom"
import StoreHeader from "@components/StoreHeader"


const StoreLayout = () => {
  return (
    <>
      <StoreHeader />
      
      <Outlet />
    </>
  );
};

export default StoreLayout;
