import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
import {useState} from 'react'

function App() {
  const [userslist, setUserslist] = useState([])
  const addUserHandler = (uName , uAge)=>{
    setUserslist ((prevUsersList)=>{
    return [...prevUsersList, {name:uName,age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <div className="App">
     <AddUsers onAddUser={addUserHandler}/>
     <UsersList users={userslist}/>
    </div>
  );
}

export default App;
