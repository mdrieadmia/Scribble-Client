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
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

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
                element: <ProtectedRoute><AddBlog/></ProtectedRoute>
            },
            {
                path: '/featured',
                element: <ProtectedRoute><Featured/></ProtectedRoute>
            },
            {
                path: '/wishlist',
                element: <ProtectedRoute><Wishlist/></ProtectedRoute>
            },
            {
                path: '/blog/details/:id',
                element: <ProtectedRoute><BlogDetails/></ProtectedRoute>
            },
            {
                path: '/blog/update/:id',
                element: <ProtectedRoute><UpdateBlog/></ProtectedRoute>
            },
        ]


    }
])

export default Router;