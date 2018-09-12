import React from 'react';
import FormEmail from './formEmail';
import FormPassword from './formPassword';
import FormConfirmPassword from './formConfirmPassword';
import { Link } from 'react-router-dom';

const registerBox = () => {
  return (
    <div className="login__box-main">
      <div className="login__box-main-leftSide"></div>
      <div className="login__box-main-rightSide">
        <form className="login__box-main-form" method="POST">
          <img alt="logo" className="login__box-main-logo" src={require('../images/todo-icon.png')} />
          <FormEmail />
          <FormPassword />
          <FormConfirmPassword />
          <div className="login__box-main-form-buttons">
            <button className="login__box-main-rightSide-submit" type="submit">Sign Up</button>
            <Link to="/"><button className="login__box-main-rightSide-submit" >Go Back</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default registerBox;

