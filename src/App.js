import { useState } from "react";
import "./App.css";
import AddUserForm from "./comp/AddUserForm";
import Users from "./comp/Users";

function App() {

  const [userData, setUserData] = useState([]);

  const recieveUserData = (users) => {
    setUserData(items => [users, ...items]);
  }

	return <main>
    <div className="form__wrap">      
      <AddUserForm addedUser={recieveUserData}/>
    </div>
    <div className="user__wrap">
      <Users newUser={userData}/>
    </div>
  </main>;
}

export default App;
