import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { FaMeetup } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart}=useSelector(state=>state);
  return(
    <div className="color">

      <div className="flex justify-between items-center py-3 h-20 max-w-[1080px] mx-auto">
        <NavLink to="/"><div><FaMeetup size="2.5em" color="yellow"></FaMeetup></div></NavLink>


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
