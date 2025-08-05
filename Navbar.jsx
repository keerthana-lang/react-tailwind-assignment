import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">My React App</h1>
        <ul className="hidden sm:flex gap-6 text-md">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Users</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
