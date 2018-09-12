import React, { Component } from 'react';
import LoginBox from './loginBox';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="login__box">
        <LoginBox />
      </div>
    );
  }
}

export default LoginPage;
