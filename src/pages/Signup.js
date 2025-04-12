import React, { useState } from 'react';
import '../styling/Signup.css';
import { Mail, User, Lock, Eye, EyeOff } from 'lucide-react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">Join our language learning community</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <div className="input-icon">
              <User size={20} />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <Mail size={20} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <Lock size={20} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="input-group">
            <div className="input-icon">
              <Lock size={20} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="terms-agreement">
            <label className="checkbox-container">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              <span className="terms-text">
                I agree to the{' '}
                <a href="/terms" className="terms-link">Terms of Service</a>
                {' '}and{' '}
                <a href="/privacy" className="terms-link">Privacy Policy</a>
              </span>
            </label>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <button type="button" className="google-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="google-icon"
            />
            Sign up with Google
          </button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account?{' '}
            <a href="/login" className="login-link">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

