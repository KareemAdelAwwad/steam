import {
  Route,
  createRoutesFromElements,
  RouterProvider,
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

import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<StoreLayout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="discover" element={<Discover />} />
          <Route path="points-shop" element={<PointsShop />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
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
