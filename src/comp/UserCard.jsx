import "./style.css";

export default function UserCard({ name, email, phone, age, image }) {
	return (
		<div className="user__card">
			<div className="user__thumb">
				<img src={image} />
			</div>
			<div className="user__detail">
				<div>
					<h3>{name}</h3>
					<span>Age: {age}</span>
				</div>
				<p>{email}</p>
				<p>{phone}</p>
			</div>
		</div>
	);
}
