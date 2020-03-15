import React from "react";

import Patchy from "../stockphotos/Patchy.jpg";
import "./Landing.scss";

export default function Landing() {
  return (
    <div className='landing-container'>
      <img className='patchy-container' src={Patchy} alt='' />
      <h1 className='welcome-msg'>Bienvenidos mi gente!! </h1>
      <p>landing page</p>
    </div>
  );
}
