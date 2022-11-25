const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>
    }
]);

export default router;