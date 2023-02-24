import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { HiViewList } from "react-icons/hi";
import { LoginCard } from "../LoginCard";
import { Sidebar } from "../sidebar";

export function Header({ toggleSidebarVisible }) {
	const [showLoginCard, setShowLoginCard] = useState(false);

	const handleToggleLoginCard = () => {
		setShowLoginCard(!showLoginCard);
	};

	return (
		<header className="appHeader">
			<div style={{ display: "flex" }}>
				<button className="openSidebarButton" onClick={toggleSidebarVisible}>
					<HiViewList />
				</button>
				<h3>makshoop To Do</h3>
			</div>
			<input type="text" id="search-bar" />
			<button className="profile" onClick={handleToggleLoginCard}>
				<MdAccountCircle />
			</button>
			{showLoginCard && <LoginCard />}
		</header>
	);
}
