// import "./App.css";
// 
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import MyOrder from "./screens/MyOrder";
// import Carousel from 'react-bootstrap/Carousel';

import {HashRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css"
import { CartProvider } from "./components/ContextReducer";

function App() {
  return (
  <CartProvider>

    <HashRouter >
       <div>
      <Routes>
        <Route exact path="/" element= {<Home/>}></Route>
        <Route exact path="/Login" element= {<Login/>}></Route>
        
        <Route exact path="/creatuser" element= {<Signup/>}></Route>
        <Route exact path="/myOrder" element= {<MyOrder/>}></Route>
      </Routes>
      </div>
    </HashRouter>
  </CartProvider>
    
    
  );
}

export default App;
