import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard/DashboardLayout'
import Main from '../layouts/Main'
import BlogPage from '../pages/Blog/BlogPage'
import ClassPage from '../pages/ClassPage'
import AllUsers from '../pages/Dashboard/AdminPanel/AllUsers/AllUsers'
import ManageClasses from '../pages/Dashboard/AdminPanel/ReportedProduct/ManageClasses'
import DashboardHome from '../pages/Dashboard/DashboardHome'
import AddClass from '../pages/Dashboard/InstructionPanel/AddClass'
import MyClasses from '../pages/Dashboard/InstructionPanel/ManageClass/MyClasses'
import MyOrders from '../pages/Dashboard/UserPanel/MyOrders/MyOrders'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Forms/Login'
import Registration from '../pages/Forms/Registration'
import Home from '../pages/Home/Home'
import InstructorPage from '../pages/Instructor/InstructorPage'
import SingleInstructor from '../pages/Instructor/SingleInstructor'
import SingleClass from '../pages/SingleClass/SingleClass'
import AdminRoute from './AdminRoute'
import InstructorRoutes from './InstructorRoutes'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/blog',
        element: <BlogPage />
      },
      {
        path: '/classes',
        element: <ClassPage />
      },
      {
        path: '/instructors',
        element: <InstructorPage />
      },
      {
        path: '/instructor/:id',
        element: <SingleInstructor />
      },
      {
        path: '/class/:id',

        element: <SingleClass />
      }
    ]
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome />
      },
      {
        path: '/dashboard/my-orders',
        element: <MyOrders />
      },

      {
        path: '/dashboard/add-class',
        element: (
          <InstructorRoutes>
            <AddClass />
          </InstructorRoutes>
        )
      },
      {
        path: '/dashboard/my-class',
        element: (
          <InstructorRoutes>
            <MyClasses />
          </InstructorRoutes>
        )
      },
      {
        path: '/dashboard/manage-users',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        )
      },
      {
        path: '/dashboard/manage-classes',
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        )
      }
    ]
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
