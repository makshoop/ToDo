import React from "react";
import "./styles.css";

import { FcTodoList } from "react-icons/fc";
import { FiCalendar } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import { FiWatch } from "react-icons/fi";

export function Sidebar({ isOpen }) {
	const sidebarWidth = isOpen ? "250px" : "70px";
	return (
		<aside className="sidebar" style={{ width: sidebarWidth }}>
			<header className="sidebarHeader">
				<FcTodoList />
				<p>To Do</p>
			</header>
			<nav>
				<button type="button">
					<span>
						<FiCalendar />
						<span>ToDay</span>
					</span>
				</button>
				<button type="button">
					<span>
						<FiWatch />
						<span>Important</span>
					</span>
				</button>
				<button type="button">
					<span>
						<FiBriefcase />
						<span>Planned</span>
					</span>
				</button>
				<button type="button">
					<span>
						<FiBook />
						<span>All Tasks</span>
					</span>
				</button>
			</nav>
		</aside>
	);
}
