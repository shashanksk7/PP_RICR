import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from "../assets/react.svg";

const Sidebar = () => {
  return (
    <div className='fixed left-0  h-screen w-64 bg-amber-600 p-5 flex flex-col items-start shadow-lg'>
      <img src={pic} alt="adf" className='w-fit h-28 my-5' />
      <nav className='flex flex-col w-full'>
        <NavLink to='/' className='text-amber-100 text-xl font-bold my-2 hover:text-white'>Home</NavLink>
        <NavLink to='/exp' className='text-amber-100 text-xl font-bold my-2 hover:text-white'>Experience</NavLink>
        <NavLink to='/proj' className='text-amber-100 text-xl font-bold my-2 hover:text-white'>Project</NavLink>
        <NavLink to='/quali' className='text-amber-100 text-xl font-bold my-2 hover:text-white'>Qualification</NavLink>
        <NavLink to='/hob' className='text-amber-100 text-xl font-bold my-2 hover:text-white'>Hobbies</NavLink>
        <NavLink to='/cont' className='text-amber-100 text-xl font-bold my-2 hover:text-white'>Contact Me</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
