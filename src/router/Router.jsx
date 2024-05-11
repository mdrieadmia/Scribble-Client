import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import AddBlog from "../pages/AddBlog/AddBlog";
import Featured from "../pages/Featured/Featured";
import Wishlist from "../pages/Wishlist/Wishlist";
import Register from "../pages/Authentication/Register/Register";
import BlogDetails from "../pages/BlogDetails/BlogDetails";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index : true,
                element : <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/blogs',
                element: <AllBlogs/>
            },
            {
                path: '/add',
                element: <AddBlog/>
            },
            {
                path: '/featured',
                element: <Featured/>
            },
            {
                path: '/wishlist',
                element: <Wishlist/>
            },
            {
                path: '/blog/details/:id',
                element: <BlogDetails/>
            },
        ]


    }
])

export default Router;