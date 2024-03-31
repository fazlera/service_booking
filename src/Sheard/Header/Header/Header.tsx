import { FaPhoneAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
    return (
        <div className="w-10/12 mx-auto ">
            <div className="flex justify-between h-20 bg-cyan-600 font-bold text-2xl text-stone-100 ">

                <div className="flex gap-5 items-center hover:cursor-pointer">
                   <span><FaPhoneAlt/></span>
                   <h1>Phone: 333 666 0000 </h1>
                </div>

                <div className="flex items-center gap-10 hover:cursor-pointer">

                        <span><FaCartShopping/></span>
                        <span><IoMdNotifications /></span>
                    
                </div>

            </div>
        </div>
    );
};

export default Header;