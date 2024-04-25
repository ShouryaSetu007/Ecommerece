import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { IoShirt } from "react-icons/io5";
import { PiPants } from "react-icons/pi";
import { GiSunglasses } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { PiWatchFill } from "react-icons/pi";
import { LiaRingSolid } from "react-icons/lia";

const Welcome = () => {
    const navigate=useNavigate();
  return (

   <div className="w-[100vw] min-h-[100vh] bgCool">
    <div className= ' max-w-[1080px] mx-auto h-full textCol flex flex-col pt-44 space-y-20'>
       <div className='flex flex-col gap-y-5'>
        <h1 className='text-7xl italic font-bold Font text-white uppercase'>Welcome Shopper's</h1>
        <p className='italic font-semibold Font text-lg text-lime-300'>The ultimate Destination For What you've been searching for !!</p>
        </div>
        <div className='w-[150px] h-[150px]  slideset2'>
          <div className='w-full h-full   flex justify-center items-center'><IoShirt color='skyblue' size="5em"></IoShirt></div>
          <div className='w-full h-full   flex justify-center items-center'><PiPants color='skyblue' size="5em"></PiPants></div>
          <div className='w-full h-full   flex justify-center items-center'><GiSunglasses color='skyblue' size="5.5em"></GiSunglasses></div>
          <div className='w-full h-full   flex justify-center items-center'><GiRunningShoe color='skyblue' size="5em"></GiRunningShoe></div>
          <div className='w-full h-full   flex justify-center items-center'><PiWatchFill  color='skyblue' size="5em"></PiWatchFill></div>
          <div className='w-full h-full   flex justify-center items-center'><LiaRingSolid color='skyblue' size="5em"></LiaRingSolid></div>
        </div>
        <div>
            <button onClick={()=>{navigate("/buy")}}  className='Font italic uppercase font-bold text-white flex items-center text-2xl py-2 px-2 rounded-lg bg-black hover:text-blue-300'>Start Exploring<IoIosArrowForward color='lime'></IoIosArrowForward></button>
        </div>
    </div>
    </div> 
  )
}

export default Welcome