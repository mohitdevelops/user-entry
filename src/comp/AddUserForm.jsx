import { useState, useReducer } from "react";
import "./style.css";

export default function AddUserForm({ addedUser, responseUserData }) {	

	// const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [designation, setAge] = useState("");
	const [image, setImage] = useState("");

	const [nameState, dispatchNameState] = useReducer(
		(state, action) => {
			if (action.type === "USERNAME") {
				return {
					userName: action.nameValue,
					isValid: action.nameValue.includes(" "),
				};
			}
			if (action.type === "NAME_ON_CHANGE") {
				return {
					userName: state.userName,
				};
			}
		},
		{
			userName: "",
			isValid: null,
		}
	);

	const [emailState, dispatchEmailState] = useReducer(
		(state, action) => {
			if (action.type === "USEREMAIL") {
				return {
					userEmail: action.emailValue,
					isValid: action.emailValue.includes("@"),
				};
			}
			if (action.type === "EMAIL_ON_CHANGE") {
				return {
					userEmail: state.emailValue,
				};
			}
		},
		{
			userEmail: "",
			isValid: null,
		}
	);

	const addUserHandler = async (e) => {
		e.preventDefault();

		setAge("");
		setImage("");
		setPhone("");
		if (!nameState.isValid) {
			alert("name is not valid");
			return;
		}
		nameState.nameValue = "";
		if (!emailState.isValid) {
			alert("email is not valid");
			return;
		}
		emailState.emailValue = "";

		const userData = {
			userName: nameState.userName,
			userEmail: emailState.userEmail,
			userDesignation: designation,
			userPhone: phone,
			userImage: image,
		};
		// Sending data back to the parent App.js
		addedUser(userData);	
		
		// const response = await fetch('https://user-entry-data-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', {
		// 	method: 'POST',
		// 	body: JSON.stringify(userData),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// })

		// const data = await response.json();

		// responseUserData(data);
		
	};

	return (
		<>
			<h3>Add user</h3>
			<form onSubmit={addUserHandler}>
				<div className="form__group">
					<input
						type="text"
						placeholder="Full Name"
						value={nameState.nameValue}
						onChange={(e) =>
							dispatchNameState({
								type: "NAME_ON_CHANGE",
								nameValue: e.target.value,
							})
						}
						onBlur={(e) =>
							dispatchNameState({
								type: "USERNAME",
								nameValue: e.target.value,
							})
						}
					/>
					{nameState.isValid === false && (
						<span className="invalid">*Enter your full name</span>
					)}
				</div>
				<div className="form__group">
					<input
						type="text"
						placeholder="Email"
						value={emailState.emailValue}
						onChange={(e) =>
							dispatchEmailState({
								type: "EMAIL_ON_CHANGE",
								emailValue: e.target.value,
							})
						}
						onBlur={(e) =>
							dispatchEmailState({
								type: "USEREMAIL",
								emailValue: e.target.value,
							})
						}
					/>
					{emailState.isValid === false && (
						<span className="invalid">*Invalid Email</span>
					)}
				</div>
				<div className="form__group">
					<input
						type="text"
						placeholder="Designation"
						value={designation}
						onChange={(e) => setAge(e.target.value)}
					/>
				</div>
				<div className="form__group">
					<input
						type="number"
						placeholder="Contact no."
						value={phone}
						onChange={(e) => {
							if (e.target.value.length > 11) return false;
							setPhone(e?.target.value);
						}}
					/>
				</div>
				<div className="form__group">
					<input
						type="text"
						placeholder="Profile Url"
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
				</div>
				<div className="form__group">
					<input type="submit" value="Add" />
				</div>
			</form>
		</>
	);
}
