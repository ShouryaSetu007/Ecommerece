import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/buy" element={<Home></Home>}></Route>
        <Route path="/cart"  element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
};

export default App;
