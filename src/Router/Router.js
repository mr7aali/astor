import Category from "../component/Category/Category";
import Banner from "../component/Home/Banner/Banner";
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
            }
        ]
    }
]);

export default router;