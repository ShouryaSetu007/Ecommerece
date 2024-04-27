import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { BsEmojiFrown } from "react-icons/bs";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';



const Cart = () => {
  const navigate=useNavigate();
  const {cart}=useSelector((state)=>state);
  // cart is an array of objects=> [{},{},{},{}.....]

  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount( cart.reduce( (acc,curr)=>acc + curr.price,0));
    // 0 is used to indicate the initial value of the accumulator i.e acc
  },[cart])
  // jab bhi cart wala array change hoga then we will have update our totalamount
  // and cart array kaise change ho skta hai ,either we add a item to the cart or remove a item from the cart



  return(
    <>
    <Navbar></Navbar>
    <div>
      {
        cart.length>0 ? (
        <div className="flex w-[1080px] mx-auto gap-x-8 mt-10 pb-5 pt-20">
        <div className="flex flex-col gap-y-5 max-w-[60%]">
          {
            cart.map((item,index)=> (
              <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
            ))
          }
        </div>
        <div className=" pb-10 flex flex-col justify-between w-[40%]">

          <div className="">
            <h1 className="flex text-green-600 font-bold text-[14px] uppercase">Your Cart</h1>
            <h1 className=" text-green-600 font-bold text-3xl tracking-wide uppercase">Summary</h1>
            <p>
              <span className="flex text-[14px] text-black font-semibold mt-1">Total Items: {cart.length}</span>
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="text-[14px] text-black font-semibold">Total Amount: ${totalAmount}</p>
            <button onClick={()=>{navigate("/login")}} className="text-white font-bold text-lg bg-green-700 px-2 py-1 rounded-sm">CheckOut Now</button>
          </div>
        </div>
        </div>) : 

        (<div className='min-h-[100vh] textCol w-full  flex flex-col justify-center items-center  text-4xl italic font-bold gap-y-5 bgCool'>
          <h1 className="flex gap-x-3 Font text-sky-400">Cart is Empty <BsEmojiFrown color="yellow"></BsEmojiFrown></h1>
          <NavLink to="/buy">
          <button className=' text-[beige] Font uppercase flex items-center text-2xl py-2 px-2 rounded-lg bg-black hover:text-blue-400 italic'>Shop From Us</button>
          </NavLink>
         </div>)
      }
    </div>
    </>
  );
};

export default Cart;
