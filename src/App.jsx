import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import StoreLayout from "./layouts/StoreLayout";
import Home from "./pages/client-store/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/store" element={<StoreLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
