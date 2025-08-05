import React from 'react';

function UserCard({ name, age }) {
  return (
    <div className="border rounded-2xl shadow-lg p-6 bg-white hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 text-lg">Age: {age}</p>
    </div>
  );
}

export default UserCard;
