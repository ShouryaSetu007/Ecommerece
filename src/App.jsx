import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/buy" element={<Home></Home>}></Route>
        <Route path="/cart"  element={<Cart></Cart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
};

export default App;
