import React from "react";
import "./styles.css";

import { FcTodoList } from "react-icons/fc";
import { FiCalendar } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import { FiWatch } from "react-icons/fi";
import { Link, Router } from "react-router-dom";

export function Sidebar() {
	return (
		<aside className="sidebar">
			<header className="sidebarHeader">
				<FcTodoList />
				<p>To Do</p>
			</header>

			<nav>
				<Link to='/today'>
					<button type="button">
						<span>
							<FiCalendar />
							<span>ToDay</span>
						</span>
					</button>
				</Link>
				<Link to='/important'>
					<button type="button">
						<span>
							<FiWatch />
							<span>Important</span>
						</span>
					</button>
				</Link>
				<Link to='planned'>
					<button type="button">
						<span>
							<FiBriefcase />
							<span>Planned</span>
						</span>
					</button>
				</Link>
				<Link to='/all'>
					<button type="button">
						<span>
							<FiBook />
							<span>All Tasks</span>
						</span>
					</button>
				</Link>
			</nav>
		</aside>
	);
}
