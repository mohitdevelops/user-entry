import { useState, useReducer } from "react";
import "./style.css";

export default function AddUserForm({ addedUser }) {
	const [name, setName] = useState("");
	const [github, setGithub] = useState("");
	const [bio, setBio] = useState("");
	const [image, setImage] = useState("");

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

	const addUserHandler = (e) => {
		e.preventDefault();		
		if (!emailState.isValid) {
			alert("email is not valid");
			return;
		}
		emailState.emailValue = "";

		const userData = {
			userName: name,
			userEmail: emailState.userEmail,
			userBio: bio,
			userGithub: github,
			userImage: image,
		};
		addedUser(userData);
		window.location.reload(true);
		setName("");
		setBio("");
		setImage("");
		setGithub("");
	};

	return (
		<>
			<h3>Add user</h3>
			<form onSubmit={addUserHandler}>
				<div className="form__group">
					<input
						type="text"
						placeholder="Full Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
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
						placeholder="Bio"
						value={bio}
						onChange={(e) => setBio(e.target.value)}
					/>
				</div>
				<div className="form__group">
					<input
						type="text"
						placeholder="GitHub Username"
						value={github}
						onChange={(e) => {
							setGithub(e?.target.value);
						}}
					/>
				</div>
				<div className="form__group">
					<input
						type="text"
						placeholder="Profile Pic Url"
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
