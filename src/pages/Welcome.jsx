import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Welcome = () => {
    const navigate=useNavigate();
  return (

   <div className="">
    <div className= ' textCol w-full flex flex-col items-center gap-y-6 pt-20'>
        <h1 className='flex text-5xl italic font-bold'>Welcome Shopper's</h1>
        <p className='flex  italic font-semibold'>The ultimate Destination For What you've been searching for</p>
        <div>
            <button onClick={()=>{navigate("/buy")}}  className=' text-[beige] flex items-center text-2xl py-2 px-2 rounded-lg bg-black hover:text-blue-400'>Shop From Us <IoIosArrowForward color='green'></IoIosArrowForward></button>
        </div>
    </div>
    </div> 
  )
}

export default Welcome