import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { authService } from '../services/auth';

const AuthComponent = () => {
  const { user, signUp, signIn, logout } = UserAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      if (isLogin) {
        // Login
        await signIn(formData.email, formData.password);
        setMessage('Successfully logged in!');
      } else {
        // Register
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        if (formData.password.length < 6) {
          setError('Password must be at least 6 characters');
          setLoading(false);
          return;
        }
        await signUp(formData.email, formData.password);
        setMessage('Account created successfully! Please check your email for verification.');
      }
      
      // Clear form
      setFormData({ email: '', password: '', confirmPassword: '' });
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setMessage('Successfully logged out');
    } catch (error) {
      setError('Failed to log out');
    }
  };

  const handlePasswordReset = async () => {
    if (!formData.email) {
      setError('Please enter your email address');
      return;
    }

    try {
      await authService.resetPassword(formData.email);
      setMessage('Password reset email sent! Check your inbox.');
    } catch (error) {
      setError('Failed to send password reset email');
    }
  };

  // If user is logged in, show user info and logout option
  if (user) {
    return (
      <div className="auth-container" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
        <div className="user-info" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3>Welcome to LanStartup!</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Status:</strong> {user.emailVerified ? '✅ Verified' : '⚠️ Not Verified'}</p>
          
          {!user.emailVerified && (
            <div style={{ backgroundColor: '#fff3cd', padding: '10px', borderRadius: '4px', margin: '10px 0' }}>
              <p style={{ margin: 0, color: '#856404' }}>
                Please check your email and verify your account for full access.
              </p>
            </div>
          )}
        </div>
        
        <button
          onClick={handleLogout}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Sign Out
        </button>
        
        {message && (
          <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px' }}>
            {message}
          </div>
        )}
      </div>
    );
  }

  // Login/Register form
  return (
    <div className="auth-container" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <div className="auth-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2>Welcome to LanStartup</h2>
        <p>{isLogin ? 'Sign in to your account' : 'Create a new account'}</p>
      </div>

      <div className="auth-toggle" style={{ display: 'flex', marginBottom: '20px', borderRadius: '4px', overflow: 'hidden' }}>
        <button
          onClick={() => setIsLogin(true)}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: isLogin ? '#007bff' : '#f8f9fa',
            color: isLogin ? 'white' : '#333',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsLogin(false)}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: !isLogin ? '#007bff' : '#f8f9fa',
            color: !isLogin ? 'white' : '#333',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        {!isLogin && (
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginBottom: '10px'
          }}
        >
          {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
        </button>
      </form>

      {isLogin && (
        <button
          onClick={handlePasswordReset}
          style={{
            width: '100%',
            padding: '8px',
            backgroundColor: 'transparent',
            color: '#007bff',
            border: '1px solid #007bff',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
        >
          Forgot Password?
        </button>
      )}

      {error && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>
          {error}
        </div>
      )}

      {message && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
