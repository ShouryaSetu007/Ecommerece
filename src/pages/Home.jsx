import { useEffect, useState } from "react";
import Product from "../components/Product";
import { Spinner } from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      // console.log(data);
      setPosts(data);
    }
    catch(error){
      console.log("error");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[]);

  return(
    <div className="">
      {
        loading? (<Spinner></Spinner>):
        (posts.length >0 ?(<div className="  -z-20 pt-20 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1080px] mx-auto p-2 space-x-5 space-y-10 min-h-[80vh]">
          {
            posts.map((post) => (
              <Product key={post.id} post={post}></Product>
            ))
          }
        </div>):(<div>No Posts Found!!</div>))
      }
    </div>
  )
};

export default Home;
