import React, { useState } from 'react';
import '../styling/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email login logic here
    console.log('Logging in with:', email, password);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Logging in with Google');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-name">Login - LanguageHIIT</h1>
        
        <div className="login-form-container">
          <h2 className="login-title">Log in to your account</h2>
          <p className="login-subtitle">Enter your credentials to access your account</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              className="email-input"
              placeholder="email@domain.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
            
            <input
              type="password"
              className="password-input"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            
            <div className="forgot-password-container">
              <a href="/forgot-password" className="forgot-password-link">
                Forgot password?
              </a>
            </div>
            
            <button type="submit" className="login-btn">
              Log in with email
            </button>
          </form>
          
          <div className="divider">
            <span>or continue with</span>
          </div>
          
          <button 
            className="google-login-btn"
            onClick={handleGoogleLogin}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google logo" 
              className="google-icon" 
            />
            Google
          </button>
          
          <p className="signup-redirect">
            Don't have an account?{' '}
            <a href="/signup" className="signup-link">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
