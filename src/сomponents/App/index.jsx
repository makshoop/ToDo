import React from "react";
import { Tasks } from "../tasks/Tasks";
import { Header } from "../header/Header";
import { Sidebar } from "../Sidebar";

import "./styles.css";

export function App() {
	return (
		<>
			<Header />
			<main className="appMain">
				<Sidebar />
				<div className="tasks-container">
					<Tasks />
				</div>
			</main>
			{/* <footer>Footer</footer> */}
		</>
	);
}
