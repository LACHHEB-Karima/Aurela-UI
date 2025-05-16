import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SingUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSignUp = () => {
    console.log('Login attempt with:', { email, password });

  };
  
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md m-auto mt-10">
      <h1 className="text-3xl font-normal text-center text-gray-800 mb-4">Sign Up</h1>
      <div className="w-16 h-px bg-gray-600 mb-12"></div>
      <div className="w-full">
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
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
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