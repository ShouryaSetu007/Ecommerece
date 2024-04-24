import { useState } from "react";
import {add,remove} from "../redux/Slices/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";

const Product = (props) => {
  const post=props.post;
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();

  const addToCart= () =>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart= () =>{
    dispatch(remove(post.id));
    toast.error("Item Removed from cart");
  }



  return(
    <div className=" flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] gap-3 p-4 mt-10 ml-5 rounded-xl outline outline-gray-200">
      <h1 className="text-gray-700 font-semibold text-lg w-40 mt-1 truncate">{post.title.length<15 ? post.title : post.title.substring(0,15)+"..."}</h1>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      <div className="h-[180px]">
        {/* h-[180px] is given to handle the size of the image */}
        <img src={post.image} className="h-full w-full" alt=""/>
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
      <p className="text-green-600 font-semibold text-[14px]">${post.price}</p>
      {
        cart.some((p) => p.id == post.id) ?
        // remember cart is an array!!
        // so we  basically  will check for every elemnet in the cart that is the elemnet id equal to current post id or not
        // meaning is the product already present in the cart or not
        (<button className="text-[12px] text-gray-700 outline outline-gray-300 rounded-full p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in "
        onClick={removeFromCart}>
          Remove Item
        </button>) :
        (<button className="text-[12px] text-gray-700 outline outline-gray-300 rounded-full p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in "
        onClick={addToCart}>Add To Cart</button>)
      }
      </div>
    </div>
  );
};

export default Product;
