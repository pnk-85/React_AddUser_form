import React,{ useState } from 'react';
import UserInput from './Components/UserItem/UserInput';
import UserInputList from './Components/UserItem/UserInputList';


function App() {

  const [userInputList, setUserInputList] = useState([]);

  const userInputHandler = (uName,uAge,uClg) => {
    setUserInputList((prevUsrList) => {
      return[...prevUsrList, {name: uName, age: uAge, clg:uClg, id : Math.random().toString()}]
    })
  }

  return (
    <React.Fragment>
      <UserInput onAddUser={userInputHandler} /> 
      <UserInputList users={userInputList} />
    </React.Fragment>
  );
}

export default App;
