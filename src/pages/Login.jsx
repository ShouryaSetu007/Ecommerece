import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosLock } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  return (
    <div className="h-[100vh] w-[100vw] loginGrad items-center py-[8vh]">
      <div className="w-[80%] max-w-[1080px] h-[100%] mx-auto bg-[#121212] flex relative">
        <div className="absolute top-2 left-4 cursor-pointer" onClick={()=>{navigate(-1)}}><IoMdArrowRoundBack size="1.5em" color="gray"/></div>
        <div className="left Font text-white h-full w-[100%] max-w-[50%] flex flex-col gap-y-16 items-center  pt-20">
          <h1 className="text-7xl font-bold text-[#b2a8c2]">Log In</h1>
          <div className="flex flex-col gap-y-4">
            <label className="flex  gap-x-2">
              <RiAccountCircleFill color="#b2a8c2" size="1.5em" />
              <input type="email" placeholder="Email" required className="rounded-sm  text-white bg-transparent border-b-[1px] focus:outline-0"/>
            </label>

            <label className="flex  gap-x-2">
              <IoIosLock color="#b2a8c2" size="1.5em" />
              <input type="password" placeholder="Password" required className="rounded-sm  text-white bg-transparent border-b-[1px] focus:outline-0"/>
            </label>
          </div>
          <div>
            <button className="px-7 py-2 text-center rounded-xl cursor-pointer uppercase font-bold bg-blue-600">LogIn</button>
          </div>
        </div>

        <div className="right h-full w-[100%] max-w-[50%]">
          <img src="https://images.unsplash.com/photo-1656164753657-8ff832063a71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
               className="w-[100%] h-[100%] object-cover"/>
        </div>
      </div>
    </div>

    // bg-[#121212]
    //  <img src="https://images.unsplash.com/photo-1656164753657-8ff832063a71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
};

export default Login;
