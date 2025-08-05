import React from 'react';

function StatsCard({ count }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 max-w-xs mx-auto mb-4">
      <h3 className="text-lg font-semibold text-gray-700">👥 Total Users</h3>
      <p className="text-3xl font-bold text-blue-600">{count}</p>
    </div>
  );
}

export default StatsCard;
