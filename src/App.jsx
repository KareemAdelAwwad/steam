import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import StoreLayout from "@layouts/StoreLayout";
import Home from "@pages/client-store/Home";
import Browse from "@pages/client-store/Browse";
import Discover from "@pages/client-store/Discover";
import PointsShop from "@pages/client-store/PointsShop";
import Wishlist from "@pages/client-store/Wishlist";
import Cart from "@pages/client-store/Cart";

import "@utils/CustomPaging.css";
import NotFound from "@utils/NotFound";

import SingleGame from "@pages/client-store/SingleGame/SingleGame";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<StoreLayout />}>
          <Route index element={<Home />} />
          {/* Single Games */}
          <Route path="store/game/:href" element={<SingleGame />} />
          {/* Store Nav */}
          <Route path="store/browse" element={<Browse />} />
          <Route path="store/discover" element={<Discover />} />
          <Route path="store/points-shop" element={<PointsShop />} />
          <Route path="store/wishlist" element={<Wishlist />} />
          <Route path="store/cart" element={<Cart />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
