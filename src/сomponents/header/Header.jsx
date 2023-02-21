import React from "react";
import { FiGrid } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

export function Header() {
	return (
		<div className="header">
			<button className="openSideBar">
				<FiGrid />
			</button>
			<h3>(MH)ToDo</h3>
			<input type="text" id="search-bar" />
			<button className="nightMode">
				<WiMoonAltWaningCrescent4 />
			</button>
			<button className="profile">
				<MdAccountCircle />
			</button>
		</div>
	);
}
