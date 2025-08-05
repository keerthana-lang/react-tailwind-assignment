import React from 'react';

function WelcomeMessage({ name }) {
  return (
    <div className="text-center py-4">
      <h2 className="text-xl font-semibold text-gray-800">
        👋 Welcome, {name}!
      </h2>
      <p className="text-gray-600">Here is the list of registered users.</p>
    </div>
  );
}

export default WelcomeMessage;
