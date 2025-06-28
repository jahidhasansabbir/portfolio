import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Details from "../pages/Details/Details";
import Loading from "../components/common/Loading/Loading";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index:true,
                Component: Home,
                loader: ()=>fetch('projects.json'),
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path:'details/:id',
                Component: Details
            }
        ]
    }
])