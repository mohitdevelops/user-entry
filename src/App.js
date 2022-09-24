import { useState } from "react";
import "./App.css";
import AddUserForm from "./comp/AddUserForm";
import Users from "./comp/Users";
document.title = "User Data";

function App() {
	const [userData, setUserData] = useState([]);

	const recieveUserData = async (users) => {    

		const responseData = await fetch(
			"https://user-entry-data-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
			{
				method: "POST",
				body: JSON.stringify(users),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const data = await responseData.json();

		console.log(data);

    setUserData((items) => [users, ...items]);
	};

	return (
		<main>
			<div className="form__wrap">
				<AddUserForm addedUser={recieveUserData} />
			</div>
			<div className="user__wrap">
				{userData.length > 0 ? (
					<Users newUser={userData} />
				) : (
					<p>No user found</p>
				)}
			</div>
		</main>
	);
}

export default App;
