import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../services/AuthenticationService';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isPasswordStrong = (password) => {
    // Minimum 8 characters, at least one letter and one number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignUp = async () => {
    // Reset previous error
    setError('');

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!isPasswordStrong(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one letter and one number.'
      );
      return;
    }

    try {
      await register({ name, email, password, role: 'USER' });
      navigate('/activate-account');
    } catch (err) {
      setError(err?.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md m-auto mt-10">
      <h1 className="text-3xl font-normal text-center text-gray-800 mb-4">Sign Up</h1>
      <div className="w-16 h-px bg-gray-600 mb-12"></div>
      <p className="text-sm text-center mx-auto text-gray-500 mb-12">
        Enter a valid and working email we will send you an email to activate your account
      </p>
      <div className="w-full">
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div className="flex justify-between mb-6 text-sm">
          <a href="#" className="text-gray-700 hover:underline">Forgot your password?</a>
          <Link to="/login" className="text-gray-700 hover:underline">Login</Link>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSignUp}
            className="px-8 py-2 bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
