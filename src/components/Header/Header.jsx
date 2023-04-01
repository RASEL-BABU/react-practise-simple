import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between bg-white-500 p-4' >
        <div className='text-3xl bold'>
            <h1 className='font-bold'>Knowledge Cafe</h1>
        </div>
        
      <div className='flex gap-10 h-10 font-bold'>
      <a href="">Home</a>
      <a href="">Login</a>
      <a href="">Blog</a>
      <a href="">SignUp</a>
      </div>
    </div>
    );
};

export default Header;