import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";
import "./style.css";

export default function UserCard({ name, email, github, bio, image }) {
	return (
		<div className="user__card">
			<div className="user__thumb">
				<img src={image} alt={name} />
			</div>
			<div className="user__detail">
				<h3>{name}</h3>
				<span>{bio}</span>
				<div>
					<p>
						<FaEnvelope className="icons" />
						{email}
					</p>
					<p>
						<FaGithub className="icons" />
						<a href={`https://github.com/${github}`} target="_blank">
							{github}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
