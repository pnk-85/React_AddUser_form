import React,{ useState } from 'react';
import UserInput from './Components/UserItem/UserInput';
import UserInputList from './Components/UserItem/UserInputList';

function App() {

  const [userInputList, setUserInputList] = useState([]);

  const userInputHandler = (uName,uAge) => {
    setUserInputList((prevUsrList) => {
      return[...prevUsrList, {name: uName, age: uAge, id : Math.random().toString()}]
    })
  }

  return (
    <div>
      <UserInput onAddUser={userInputHandler} />
      <UserInputList users={userInputList} />
    </div>
  );
}

export default App;
