import { createBrowserRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import ShopSection from "./component/ShopSection";
import ProductDetail from "./component/ProductDetail";
import ProductRoute from "./component/ProductRoute";
import ContactPage from "./page/ContactPage";
import ContactGetData from "./component/ContactGetData";
import AboutPage from "./page/AboutPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
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
      element: (
        <>
          <AboutPage />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <ContactPage />
        </>
      ),
    },
    {
      path: "/formData",
      element: (
        <>
          <ContactGetData />
        </>
      ),
    },
  ],

  {
    basename: "/gitflower/",
  }
);

export default router;
