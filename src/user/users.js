import React from "react";
import Patchy from "../stockphotos/Patchy.jpg";
// import './User.scss'

export default function Users() {
  return (
    <div className='user-container'>
      <h1 className='user-h1'>Username-Text</h1>
      <div>
        <p className='user-p'>Hola, welcome to your profile!</p>
      </div>
      <div className='user-img-container'>
        <img className='users-img' src={Patchy} alt='' />
        <p className='usersIMG-title'>Patchy</p>
        <p className='img-text'>
          patchy was created by me for CarPal. Hopefully more creative
          characters are added as labs goes along.
        </p>
      </div>
    </div>
  );
}
