import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { FaMeetup } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { BiLogoShopify } from "react-icons/bi";

const Navbar = () => {

  const {cart}=useSelector(state=>state);
  return(
    <div className="bgCool w-full fixed top-0 z-10">
      <div className="flex justify-between items-center py-3 max-w-[1080px] mx-auto">
        <NavLink to="/"><div><BiLogoShopify size="3em" color="#48db48"></BiLogoShopify></div></NavLink>


        <div className="flex text-white space-x-10 font-medium uppercase text-sm Font">
          <div className="w-32 h-10 relative flex items-center justify-center overflow-hidden">
            <h1 className=" text-center carti transition-all ease-linear duration-[0.3s]"><a href="#" className="text-white relative z-[9] hover:text-lime-400 hover:font-bold">About</a></h1>
            {/* <div className={"border border-blue-600 w-full h-full absolute top-10 rounded-2xl"}></div> */}
            {/* transition-all duration-200 ease-in hover:translate-y-[-2.5rem] */}
          </div>

          <div className="w-32 h-10 relative flex items-center justify-center overflow-hidden">
            <h1 className=" text-center carti transition-all ease-linear duration-[0.3s]"><a href="#" className="text-white relative z-[9] hover:text-lime-400 hover:font-bold">Contact</a></h1>
            {/* <div className={"border border-blue-600 w-full h-full absolute top-10 rounded-2xl"}></div> */}
            {/* transition-all duration-200 ease-in hover:translate-y-[-2.5rem] */}
          </div>

          <div className="w-32 h-10 relative flex items-center justify-center overflow-hidden">
            <h1 className=" text-center carti transition-all ease-linear duration-[0.3s]"><a href="#" className="text-white relative z-[9] hover:text-lime-400 hover:font-bold">Support</a></h1>
            {/* <div className={"border border-blue-600 w-full h-full absolute top-10 rounded-2xl"}></div> */}
            {/* transition-all duration-200 ease-in hover:translate-y-[-2.5rem] */}
          </div>
        </div>
        <div className="flex items-center gap-5">
         <NavLink to="/buy">
         <p><IconContext.Provider value={{ color:"beige", className: "contactIcon" }}>
            <IoIosHome size="1.5em"></IoIosHome>
            </IconContext.Provider></p>
          </NavLink> 

          <NavLink to="/cart">
            <div className="relative">
            <IconContext.Provider value={{ color:"beige", className: "contactIcon" }}>
            <FaShoppingCart size="1.2em"></FaShoppingCart>
            </IconContext.Provider>
            {
              cart.length>0 &&
              <span className="absolute -top-2 -right-3 text-white bg-green-500 w-5 h-5 text-xs animate-bounce rounded-full flex justify-center items-center">{cart.length}</span>
            }

            {/* 
            <IconContext.Provider value={{ color:"beige", className: "contactIcon" }}>
            <FaShoppingCart size="1.5em"></FaShoppingCart>
            </IconContext.Provider>
            // this is a way to achieve the hover effects in case of react icons.
            // contactIcon defined in index.css
             */}
            </div>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
