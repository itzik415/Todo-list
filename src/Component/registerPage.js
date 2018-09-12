import React, { Component } from 'react';
import RegisterBox from './registerBox';

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="register__box">
        <RegisterBox />
      </div>
    );
  }
}

export default RegisterPage;
