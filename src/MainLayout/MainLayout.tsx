import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Header/Navber/Navbar";
import Footer from "../Sheard/Footer/Footer";
import Header from "../Sheard/Header/Header/Header";

const MainLayout = () => {
    return (        
        <>
        <div className="bg-cyan-600 font-googleFont">
            <Header/>
        </div>
        <div>
            <Navbar/>
        </div>
        <div className="min-h-screen">
        <Outlet/>
        </div>
        

        <div>
            <Footer/>
        </div>
        </>
   
    );
};

export default MainLayout;