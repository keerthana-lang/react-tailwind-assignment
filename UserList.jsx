import React from 'react';
import UserCard from './UserCard';

function UserList({ users }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-6xl mx-auto">
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default UserList;
