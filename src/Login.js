import React from 'react';
import './App.css';

function Login() {
  return (
    <form className = 'loginContent'>
    <label>Username:</label>
    <input type='text'id = 'Username'></input>
    <br></br> 
    <label>Password:</label>
    <input type='password'id = 'Password'></input>
    <br></br> 
    <button>Login</button>
    </form>
  );
}

export default Login;