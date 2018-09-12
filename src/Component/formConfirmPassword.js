import React from 'react';

const formConfirmPassword = () => {
  return (
    <div className="login__box-main-form-confirmPassword">
      <input 
        className="login__box-main-rightSide-confirmPassword" 
        type="password" 
        name="password" 
        placeholder="Confirm Password"
        required/>
      <ion-icon className="login__box-main-form-icon" name="checkmark-circle"></ion-icon>
      <p className="login__box-main-form-confirmPasswordText">Password</p>
    </div>
  );
}

export default formConfirmPassword;

