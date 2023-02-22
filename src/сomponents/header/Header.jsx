import React from "react";
import { FcSearch } from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";

export function Header() {
	return (
		<header className="appHeader">
			<h3>makshoop To Do</h3>
			<input type="text" id="search-bar" />
			<button className="profile">
				<MdAccountCircle />
			</button>
		</header>
	);
}
