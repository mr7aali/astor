import Login from "../component/Authorization/Login/Login";
import LogOut from "../component/Authorization/LogOut/Resister";
import Blog from "../component/Blog/Blog";
import Category from "../component/Category/Category";
import Dashboard from "../component/Dashboard/Dashboard";
import AllBuyers from "../component/Dashboard/NotRoot/AllBuyers";
import AllSellers from "../component/Dashboard/NotRoot/AllSellers";
import MyBuyers from "../component/Dashboard/NotRoot/MyBuyers";
import Myproduct from "../component/Dashboard/NotRoot/Myproduct";
import Home from "../component/Home/Home";
import PrivetRout from "../component/PrivetRout/PrivetRout";
import DashBoardLayout from "../Layout/DashBoardLayout";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categorys/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }



        ]
    },
    {

        path: '/login',
        element: <Login></Login>

    },
    {

        path: '/register',

        element: <LogOut></LogOut>

    },
    {
        path: '/Dashboard',
        element: <PrivetRout><DashBoardLayout></DashBoardLayout></PrivetRout>,
        children: [
            {
                path: '/Dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/Dashboard/myproduct',
                element: <Myproduct></Myproduct>
            },
            {
                path: '/Dashboard/mybuyers',
                element:<MyBuyers></MyBuyers>
            },
            {
                path: '/Dashboard/allseller',
                element:<AllSellers></AllSellers>
            }

        ]
    }

]);

export default router;