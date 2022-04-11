import React  from 'react';
import { useState } from 'react';
import "./App.css";
import "./index.css";
import Header from "./Components/Header/Header";
// import Home from './Pages/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard'
// import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from "./Components/Footer/Footer";
import Cart from './Components/Cart/Cart';

function App() {

  const [show, setShow] = useState(true);  
  return (
    <>
      <Header setShow={setShow}/>
      {/* <Home/> */}
      {/* <ContactUs/> */}
       {show ? <Dashboard/> : <Cart/>}
      <Footer/>
    </>
  );
};

export default App;
