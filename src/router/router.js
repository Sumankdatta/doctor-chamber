import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DashboardLayout from "../layout/DashboardLayout";
import AdminRoute from "./AdminRoute";
import PrivateRoute from './PrivateRout'

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },

        ]
    }
])