// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mt-4"><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div className="container mt-4"><h1>{error}</h1></div>;
  }

  return (
    <div className="container mt-4">
      <h1>Users</h1>
      <ul className="list-group">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="list-group-item">
              {user.name} ({user.email})
            </li>
          ))
        ) : (
          <li className="list-group-item">No users found</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;