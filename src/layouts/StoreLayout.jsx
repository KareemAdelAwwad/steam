import { Outlet } from "react-router-dom"
import StoreHeader from "@components-store/StoreHeader"


const StoreLayout = () => {
  return (
    <>
      <StoreHeader />
      
      <Outlet />
    </>
  );
};

export default StoreLayout;
