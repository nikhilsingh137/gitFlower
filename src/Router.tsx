import { createBrowserRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import ShopSection from "./component/ShopSection";
import ProductDetail from "./component/ProductDetail";
import ProductRoute from "./component/ProductRoute";

const router = createBrowserRouter(
  [
    {
      path: "/gitFlower",
      element: (
        <>
          <Homepage />
        </>
      ),
    },
    {
      path: "/:userId",
      element: (
        <>
          <ShopSection />
        </>
      ),
    },
    {
      path: "/product/:userId",
      element: (
        <>
          <ProductDetail />
        </>
      ),
    },
    {
      path: "product/:userId/:userId",
      element: (
        <>
          <ProductRoute />
        </>
      ),
    },
    {
      path: "/about",
      element: <>Hello</>,
    },
  ],
  {
    basename: "/gitFlower",
  }
);

export default router;
