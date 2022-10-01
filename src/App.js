import { useCallback, useEffect, useState } from "react";
import "./App.css";
import AddUserForm from "./comp/AddUserForm";
import Users from "./comp/Users";
document.title = "User Data";

function App() {
	const [userData, setUserData] = useState([]);

	const fetchData = useCallback(async () => {
		try {
			const responseData = await fetch(
				"https://react-users-db-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
			);

			const data = await responseData.json();
			console.log(data);

			const loadedData = [];

			for (const key in data) {
				loadedData.push({
					key: key,
					userName: data[key].userName,
					userEmail: data[key].userEmail,
					userDesignation: data[key].userDesignation,
					userPhone: data[key].userPhone,
					userImage: data[key].userImage,
				});
			}

			console.log(loadedData);

			setUserData(loadedData);
		} catch (err) {
			console.log(err);
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	async function recieveUserData(users) {
		const responseData = await fetch(
			"https://react-users-db-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
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
	}

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
