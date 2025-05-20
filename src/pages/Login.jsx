import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setError('');
    try {
      await login({ email, password });
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md m-auto mt-10">
      <h1 className="text-3xl font-normal text-center text-gray-800 mb-4">Login</h1>
      <div className="w-16 h-px bg-gray-600 mb-12"></div>
      <div className="w-full">
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div className="flex justify-between mb-6 text-sm">
          <a href="#" className="text-gray-700 hover:underline">Forgot your password?</a>
          <Link to="/signup" className="text-gray-700 hover:underline">Create account</Link>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSignIn}
            className="px-8 py-2 bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
