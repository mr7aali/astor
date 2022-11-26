import Login from "../component/Authorization/Login/Login";
import LogOut from "../component/Authorization/LogOut/Resister";
import Category from "../component/Category/Category";
import Home from "../component/Home/Home";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                 loader:({params})=>fetch(`http://localhost:5000/categorys/${params.id}`)
            },
           
           
        ]
    },
    {
        
            path:'/login',
            element:<Login></Login>
        
    },
    {
        
            path:'/register',

            element:<LogOut></LogOut>
        
    },

]);

export default router;