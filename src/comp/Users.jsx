import UserCard from "./UserCard";
import "./style.css";

export default function Users({ newUser }) {

	return (
		<div className="usercard__wrap">
			{newUser.map((el, i) => {
				return (
					<UserCard
						key={i}
						name={el.userName}
						email={el.userEmail}
						designation={el.userDesignation}
						phone={el.userPhone}
						image={el.userImage}
					/>
				);
			})}
		</div>
	);
}
