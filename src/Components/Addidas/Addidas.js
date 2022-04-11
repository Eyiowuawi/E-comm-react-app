import React from 'react'
import './Addidas.css'
import { Link } from "react-router-dom";
import AddidasShoe from '../../Assets/Images/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.svg'
const Addidas = () => {
  return (
    <section class="addidas">
      <div class="addidas_container">
        <div class="addidas_text">
          <h1> Adidas Men Running Sneakers </h1>
          <p> Performance and design.Taken right to the edge. </p>
          <Link to='/dashboard'><h3> SHOP NOW </h3> </Link>
          <div class="thick_line"> </div>
        </div>
        <div class="addidas_img">
          <img src={AddidasShoe} alt="addidas" />
        </div>
      </div>
    </section>
  );
};
export default Addidas;
