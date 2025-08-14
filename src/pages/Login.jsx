import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.includes('@')) {
      setError('Invalid email format');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    if (!validateForm()) return;
    try {
      await signIn(email, password);
      navigate('/profile');
    } catch (err) {
      setError(err.message || 'Login failed');
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen gradient-futuristic py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto glass-panel p-8 animate-fade-in-up">
          <h2 className="text-3xl font-extrabold mb-6 text-white text-center tracking-tight">
            Welcome back
          </h2>
          {error && <p className="text-error-400 mb-4 text-sm text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white/80">
                Email address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/60 transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white/80">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/60 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-glow w-full justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;