import React,{useState}from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';



function App() {
  const [userList, setUserList]=useState([]);
  const addUserHandler = (username,age)=>{
    console.log("addUserHandler is called",username,age);
    setUserList((prevUserList)=>{
      console.log("prevUserList", prevUserList);
      return [...prevUserList,{name:username,age:age,id:Math.random().toString()}];
    });
    console.log("USERLISt",userList);

  }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}/>

    </React.Fragment>
  );
}

export default App;
