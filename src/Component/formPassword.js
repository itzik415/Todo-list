import React from 'react';

const formPassword = () => {
  return (
    <div className="login__box-main-form-password">
      <input 
        className="login__box-main-rightSide-password" 
        type="password" 
        name="password" 
        placeholder="Password"
        required/>
      <ion-icon className="login__box-main-form-icon" name="lock"></ion-icon>
      <p className="login__box-main-form-passwordText">Password</p>
    </div>
  );
}

export default formPassword;

