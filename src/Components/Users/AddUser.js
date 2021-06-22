import React, { useState } from "react";
import Card from "../UI/Card.js";
import classes from "./AddUser.module.css";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";

const AddUser = (props) => {
  const [error, setError] = useState();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const errorHandler = () =>{
    setError(null);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length <= 0 || enteredUsername.trim().length <= 0){
      setError({
        title: "Invalid input",
        message: "Please Enter a valid non empty input"
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)"
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={userNameChangeHandler}
          />

          <label htmlFor="age">Age</label>
          <input
            id="username"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
