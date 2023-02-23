import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { LoginCard } from "../LoginCard";

export function Header() {
	const [showLoginCard, setShowLoginCard] = useState(false);

	const handleToggleLoginCard = () => {
		setShowLoginCard(!showLoginCard);
	};

	return (
		<header className="appHeader">
			<h3>makshoop To Do</h3>
			<input type="text" id="search-bar" />
			<button className="profile" onClick={handleToggleLoginCard}>
				<MdAccountCircle />
			</button>
			{showLoginCard && <LoginCard />}
		</header>
	);
}
