import UserCard from "./UserCard";
import "./style.css";

export default function Users({ newUser }) {
	newUser.reverse()
	return (
		<div className="usercard__wrap">
			{newUser.map((el, i) => {
				return (
					<UserCard
						key={i}
						name={el.userName}
						email={el.userEmail}
						bio={el.userBio}
						github={el.userGithub}
						image={el.userImage}
					/>
				);
			})}
		</div>
	);
}
