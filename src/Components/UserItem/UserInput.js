import React, { useState, useRef} from "react";
import classes from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Hepler/Wrapper";

const UserInput = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const clgInputRef = useRef();

  const [error, setError] = useState();

  const userInputHandler = (event) => {

    const enteredName = nameInputRef.current.value;
    const entereusrdAge = ageInputRef.current.value;
    const enteredClgName = clgInputRef.current.value;
    event.preventDefault();
    if(enteredName.trim().length === 0 || entereusrdAge.trim().length === 0){
      setError({
        title:'Invalid Input',
        message:'pls enter valid input'
      });
        return;
    }
    if(+entereusrdAge < 1){
      setError({
        title:'Invalid Age',
        meesage: 'pls enter valid age'
      });
        return;
    }

    props.onAddUser(enteredName, entereusrdAge,enteredClgName);
    nameInputRef.current.value ='';
    ageInputRef.current.value = '';
    clgInputRef.current.value = '';

  };


  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
    <Card className={classes.input}>
      <form onSubmit={userInputHandler}>
        <label htmlFor="user">UserName</label>
        <input
          type="text"
          id="user"
          ref={nameInputRef}
        />
        <label htmlFor="clg">College Name</label>
        <input
          type="text"
          id="clg"
          ref={clgInputRef}
        />
        <label htmlFor="age">AGE (Year)</label>
        <input
          type="number"
          id="age"
          ref={ageInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default UserInput;
