import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/DashboardLayout";
import Main from "../layouts/Main";
import BlogPage from "../pages/Blog/BlogPage";
import CategoryPage from "../pages/CategoryPage";
import AllBuyers from "../pages/Dashboard/AdminPanel/AllBuyers/AllBuyers";
import AllSellers from "../pages/Dashboard/AdminPanel/AllSellers/AllSellers";
import ReportedProduct from "../pages/Dashboard/AdminPanel/ReportedProduct/ReportedProduct";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AddProduct from "../pages/Dashboard/SellerPanel/AddProduct";
import ManageProducts from "../pages/Dashboard/SellerPanel/ManageProduct/ManageProducts";
import MyOrders from "../pages/Dashboard/UserPanel/MyOrders/MyOrders";
import Payment from "../pages/Dashboard/UserPanel/Payment/Payment";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Forms/Login";
import Registration from "../pages/Forms/Registration";
import Home from "../pages/Home/Home";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoutes from "./SellerRoutes";
import SingleProductLoading from "../pages/SingleProduct/SingleProductLoading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/categories",
        element: <CategoryPage />,
      },
      {
        path: "/category/:id",

        element: <SingleProductLoading />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/:id",
        element: <Payment />,
      },

      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoutes>
            <AddProduct />
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/manage-products",
        element: (
          <SellerRoutes>
            <ManageProducts />
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoute>
            <AllBuyers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-classes",
        element: (
          <AdminRoute>
            <AllSellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reported-items",
        element: (
          <AdminRoute>
            <ReportedProduct />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
