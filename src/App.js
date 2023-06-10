import React, { useState } from 'react';

import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, college: uCollege , age: uAge, id: Math.random().toString() }
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;