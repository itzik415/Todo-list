import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './Component/loginPage';
import RegisterPage from './Component/registerPage';
import Profile from './Component/profile';
import NewTodo from './Component/newTodo';

const router = () => {
  return (
    <Router>
      <div className='route-container'>
        <Route exact path='/' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route exact path='/myProfile' component={Profile} />
        <Route path='/myProfile/newTodo' component={NewTodo} />
      </div>
    </Router>
    
  );
}

export default router;
