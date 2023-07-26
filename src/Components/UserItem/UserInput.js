import React, { useState } from "react";
import classes from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserInput = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userInputHandler = (event) => {
    event.preventDefault();
    if(enteredUser.trim().length === 0 || enteredAge.trim().length === 0){
        return;
    }
    if(+enteredAge < 1){
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

  return (
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
  );
};

export default UserInput;
