import React, { useState } from "react";
import classes from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userInputHandler = (event) => {
    event.preventDefault();
    if(enteredUser.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:'Invalid Input',
        message:'pls enter valid input'
      });
        return;
    }
    if(+enteredAge < 1){
      setError({
        title:'Invalid Age',
        meesage: 'pls enter valid age'
      });
        return;
    }

    props.onAddUser(enteredUser, enteredAge);
    setEnteredAge('');
    setEnteredUser('');
  };

  const usernameChanehandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageChanehandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
    <Card className={classes.input}>
      <form onSubmit={userInputHandler}>
        <label htmlFor="user">UserName</label>
        <input
          type="text"
          id="user"
          value={enteredUser}
          onChange={usernameChanehandler}
        />
        <label htmlFor="age">AGE (Year)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChanehandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default UserInput;
