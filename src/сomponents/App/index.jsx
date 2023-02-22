import React from "react";
import { Tasks } from "../tasks/Tasks";
import { Header } from "../header/Header";
import { NewTask } from "../tasks/NewTask";
import { Sidebar } from "../sidebar/Sidebar";

import "./styles.css";

export function App() {
	return (
		<>
			<Header />
			<main>
				<Sidebar />
				<div className="tasks-container">
					<NewTask />
					<Tasks />
				</div>
			</main>
			{/* <footer>Footer</footer> */}
		</>
	);
}
