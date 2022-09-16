import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export default function AddUserForm({ addedUser }) {
	// const [name, setName] = useState("");
	const [email, setEmail] = useState("");
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
			if (action.type === "USER_ON_CHANGE") {
				return {
					userName: state.userName,
				};
			}
			if(action.type === "USER_ON_BLUR"){
				return {
					userName: '',
				}
			}
		},
		{
			userName: "",
			isValid: null,
		}
	);

	const addUserHandler = (e) => {
		e.preventDefault();

		const userData = {
			userName: nameState.userName,
			userEmail: email,
			userDesignation: designation,
			userPhone: phone,
			userImage: image,
		};
		// Sending data back to the parent App.js
		addedUser(userData);

		setAge("");
		setEmail("");
		setImage("");
		setPhone("");
		dispatchNameState({
			type: 'USER_ON_BLUR'
		});
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
								type: "USER_ON_CHANGE",
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<span className="invalid">*Invalid Email</span>
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
