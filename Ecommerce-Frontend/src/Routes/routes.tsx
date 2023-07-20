import LoginPage from "../ui/pages/auth/LoginPage";
import ManageProductDetails from "../ui/pages/dashboard/ProductDetails/ManageProductDetails";
import ManageProducts from "../ui/pages/dashboard/Products/ManageProducts";
import DashBoardHome from "../ui/pages/dashboard/home/DashBoardHome";
import AboutUs from "../ui/pages/home/AboutUs";
import Cart from "../ui/pages/home/Cart";
import Contact from "../ui/pages/home/Contact";
import Home from "../ui/pages/home/Home";
import LoginForm from "../ui/pages/home/LoginForm";
import SingleProductDetails from "../ui/pages/home/ProductDetails";
import Products from "../ui/pages/home/Products";
import SignUpForm from "../ui/pages/home/SignUpForm";

export const homeRoutes = [
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/SingleProductDetails",
    element: <SingleProductDetails />,
  },
  {
    path: "/Products",   
    element: <Products />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/loginform",
    element: <LoginForm />,
  },
  {
    path: "/signupform",
    element: <SignUpForm />,
  },
];
export const dashBoardRoutes = [
  {
    path: "/dashboard/home",
    component: DashBoardHome,
    // element: <DashBoardHome />,
  },
  {
    path: "/dashboard/products",
    component: ManageProducts,
    element: <ManageProducts />,
  },
  {
    path: "/dashboard/manage_product_details",
    component: ManageProductDetails,
    element: <ManageProductDetails />,
  },
  {
    path: "/dashboard/loginpage",
    component: LoginPage,
    element: <LoginPage />,
  },
];
