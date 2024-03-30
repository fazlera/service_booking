import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Service from "../Components/Service/Service";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([

    {
        path: '/',
        errorElement: <ErrorPage/>,
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element: <Home/>,
            },
            {
                path: '/service',
                element: <Service/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
            
        
        
    },
    
  

])

export default router;
