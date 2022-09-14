import { useState } from "react";
import "./style.css";

export default function AddUserForm({addedUser}) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [age, setAge] = useState('');
	const [image, setImage] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();

        const userData = {
            userName: name,
            userEmail: email,
            userAge: age,
            userPhone: phone,
            userImage: image
        }
		// Sending data back to the parent App.js
        addedUser(userData);

        setAge('');
        setEmail('');
        setImage('');
        setName('');
        setPhone('');
    }

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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form__group">
					<input
						type="number"
						placeholder="Contact no."
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className="form__group">
					<input
						type="number"
						placeholder="Age"
						value={age}
						onChange={(e) => setAge(e.target.value)}
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
					<input type="submit" value="Add"/>
				</div>
			</form>
		</>
	);
}
