import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from '../component/Auth.jsx';
const Header = () => {
  const isAunthenticated = useSelector( ( state)=>state.auth.isAuthenticated)
  
  return (
    <header className="bg-black  rounded-full  mt-8 w-1/2 mx-auto font-serif border-2">
      <div className="  flex justify-between items-center py-2 px-5  ">

       <NavLink to="/dashboard"> 
       <h1 className="text-3xl font-bold text-white border-3 border-blue-500 p-2">SeekJOB</h1>
       </NavLink>
       
        { isAunthenticated ? ( <div className=' px-4 py-2 rounded-full border-2 border-blue-500'>
        <nav className="space-x-6 text-white">
          <NavLink to="/dashboard" className="font-semibold  text-2xl italic  hover:text-blue-500">Jobs  </NavLink>
          <NavLink to="/Addjob" className=" font-semibold text-2xl italic  hover:text-blue-500">+Job</NavLink>
         
        </nav>
        </div>): ( 
        
         <NavLink to="/Auth" className="font-semibold text-2xl italic px-4 text-white hover:bg-white hover:text-black hover:rounded-full hover: py-3 hover:px-4">Login</NavLink>
      
        )}
       
        
      </div>
    </header>
  );
};

export default Header;