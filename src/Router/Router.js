import Banner from "../component/Home/Banner/Banner";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Banner></Banner>
            }
        ]
    }
]);

export default router;