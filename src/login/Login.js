import React from 'react';
import './Login.css';
import LoginForm from './LoginForm';

function Login() {
    return (
      <div className="wrapper">
        <div className='login-container'>
          <div className="card">
          <div className="card-header">The Bank</div>
          <div className="card-body">
              <h5 class="card-title">Login</h5>
              <LoginForm />
          </div>
          <div className="card-footer text-muted">
              <a href="#">Forgot password?</a>
          </div>
      
          </div>

        </div>
      </div>
      
      
    );
  }
  
  export default Login;