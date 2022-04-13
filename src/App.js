import React  from 'react';
import { useState } from 'react';
import "./App.css";
import "./index.css";
import Header from "./Components/Header/Header";
import Home from './Pages/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard'
import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from "./Components/Footer/Footer";
import Cart from './Components/Cart/Cart';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router-dom';

function App() {

  const [show, setShow] = useState(true);  
  return (
    <Router>
      <Header setShow={setShow}/>
      <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/contactus' component={ContactUs} exact />  
      <Route path='/dashboard' component={Dashboard} exact />  
      <Route path='/cart' component={Cart} exact />  
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
