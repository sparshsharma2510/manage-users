import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser.js";
import UsersList from "./Components/Users/UsersList.js";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevValues) => {
      return [...prevValues, { name: userName, age: userAge }];
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
