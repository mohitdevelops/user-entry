import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./style.css";

export default function UserCard({ name, email, phone, designation, image }) {
	return (
		<div className="user__card">
			<div className="user__thumb">
				<img src={image} />
			</div>
			<div className="user__detail">
				<h3>{name}</h3>
				<span>{designation}</span>
				<div>
					<p>
						<FaEnvelope className="icons" />
						{email}
					</p>
					<p>
						<FaPhoneAlt className="icons" />
						{phone}
					</p>
				</div>
			</div>
		</div>
	);
}
