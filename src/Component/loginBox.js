import React from 'react';
import FormEmail from './formEmail';
import FormPassword from './formPassword';
import { Link } from 'react-router-dom';

const loginBox = () => {
  return (
    <div className="login__box-main">
      <div className="login__box-main-leftSide"></div>
      <div className="login__box-main-rightSide">
        <form className="login__box-main-form" method="POST">
          <img alt="logo" className="login__box-main-logo" src={require('../images/todo-icon.png')} />
          <FormEmail />
          <FormPassword />
          <div className="login__box-main-form-buttons">
            <button className="login__box-main-rightSide-submit" type="submit">Login</button>
            <Link to="/register"><button className="login__box-main-rightSide-submit" >Register</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default loginBox;

