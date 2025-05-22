import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login, signup } from '../features/authslice'; 

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector( (state)=> state.auth.user)
  
  if (isAuthenticated) {
    navigate('/dashboard');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response, data;
    
      if (isSignup) {
        response = await axios.post('http://localhost:3000/api/v1/auth/signup', {
          name,
          email,
          password,
        });
    
        data = response.data; 
        
        dispatch(signup(data.user)); 
      } else {
        response = await axios.post('http://localhost:3000/api/v1/auth/login', {
          name,
          email,
          password,
        });
    
        data = response.data;
        alert('Login Successful!');
       
        
        dispatch(login(data.token)); 
       
       
      }
    
      navigate('/dashboard');
    } catch (err) {
      console.error('Authentication error:', err);
      alert('Authentication error. Please try again.');
    }
    
  };

  return (
    <div className="max-w-md mx-auto mt-16 px-4">
      <h2 className="text-3xl  text-white font-semibold font-serif mb-6 text-center ">
      {isSignup ? "Sign Up" : "Sign In"}
      </h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-4 ">
           Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
         Submit
        </button>
      </form>
      <p className="mt-4 text-center text-3xl  text-white font-semibold font-serif mb-6 ">
        {isSignup ? 'Already have an account ? ' : ' New user ? '}
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-2xl  text-blue-500 font-semibold font-serif mb-6 text-center hover:underline"
        >
          { isSignup ? 'Login' : ' Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default Auth;
