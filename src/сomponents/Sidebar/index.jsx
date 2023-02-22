import React from "react";

import "./styles.css";

import { FcTodoList } from "react-icons/fc";
import { FiCalendar } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import { FiWatch } from "react-icons/fi";

export function Sidebar() {
	return (
		<aside className="sidebar">
			<header className="sidebarHeader">
				<i className="toDoIcon">
					<FcTodoList />
				</i>
				<p>To Do</p>
			</header>
			<nav>
				<button>
					<span>
						<i className="toDoIcon">
							<FiCalendar />
						</i>
						<span>ToDay</span>
					</span>
				</button>
				<button>
					<span>
						<i className="importantIcon">
							<FiWatch />
						</i>
						<span>Important</span>
					</span>
				</button>
				<button>
					<span>
						<i className="plannedIcon">
							<FiBriefcase />
						</i>
						<span>Planned</span>
					</span>
				</button>
				<button>
					<span>
						<i className="allTasksIcon">
							<FiBook />
						</i>
						<span>All Tasks</span>
					</span>
				</button>
			</nav>
		</aside>
	);
}
