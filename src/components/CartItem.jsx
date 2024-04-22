

import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice"
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";


const CartItem = ({item,itemIndex}) => {
 const dispatch=useDispatch();

  const removeFromCart= () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }

  return (
    <div>
      <div className="flex space-x-9 border-b-2 border-gray-400 pb-4">
        <div className="h-[180px]">
          <img src={item.image} alt=""  className="h-full w-full"/>
        </div>
        <div className="flex flex-col gap-y-6">
          <h1  className="text-gray-700 font-semibold text-lg  mt-1">{item.title}</h1>
          <h1 className="w-96 text-gray-400 font-normal text-[10px] text-left">{item.description}</h1>
          <div className="flex justify-between w-40 items-center">
            <p className="text-green-600 font-semibold text-[14px]">${item.price}</p>
            <div onClick={removeFromCart} className="flex bg-green-300 cursor-pointer rounded-full p-1">
            <MdDelete></MdDelete>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
