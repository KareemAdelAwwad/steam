import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  HashRouter,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import StoreLayout from "./layouts/StoreLayout";
import Home from "./pages/client-store/Home";
import Browse from "./pages/client-store/Browse";
import Discover from "./pages/client-store/Discover";
import PointsShop from "./pages/client-store/PointsShop";
import Wishlist from "./pages/client-store/Wishlist";
import Cart from "./pages/client-store/Cart";

import "./utilities/CustomPaging.css";
import NotFound from "./utilities/NotFound";

import EldenRing from "./pages/client-store/SingleGame/elden-ring";
import WuWa from "./pages/client-store/SingleGame/wuthering-waves";
import SpidermanMM from "./pages/client-store/SingleGame/spiderman-miles-morales";
import HaloInfinite from "./pages/client-store/SingleGame/halo-infinite";


const router = HashRouter (
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<StoreLayout />}>
          <Route index element={<Home />} />
          {/* Single Games */}
          <Route path="elden-ring" element={<EldenRing />} />
          <Route path="wuthering-waves" element={<WuWa />} />
          <Route path="spiderman-miles-morales" element={<SpidermanMM />} />
          <Route path="halo-infinite" element={<HaloInfinite />} />
          {/* Store Nav */}
          <Route path="browse" element={<Browse />} />
          <Route path="discover" element={<Discover />} />
          <Route path="points-shop" element={<PointsShop />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
