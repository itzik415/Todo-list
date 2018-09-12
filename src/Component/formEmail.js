import React from 'react';

const formEmail = () => {
  return (
    <div className="login__box-main-form-email">
      <input 
        className="login__box-main-rightSide-email" 
        type="email" 
        name="email" 
        placeholder="Email"
        required/>
      <ion-icon className="login__box-main-form-icon" name="mail"></ion-icon>
      <p className="login__box-main-form-emailText">Email</p>
    </div>
  );
}

export default formEmail;

