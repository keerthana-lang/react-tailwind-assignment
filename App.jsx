import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WelcomeMessage from './components/WelcomeMessage';
import StatsCard from './components/StatsCard';
import UserList from './components/UserList';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  const users = [
    { name: 'Karthik', age: 21 },
    { name: 'Amit', age: 22 },
    { name: 'Sneha', age: 20 },
    { name: 'Raj', age: 23 }
  ];

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      <Navbar />
      <WelcomeMessage name={user} />
      <StatsCard count={users.length} />
      <UserList users={users} />
      <Footer />
    </div>
  );
}

export default App;
