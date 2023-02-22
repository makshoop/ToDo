import React from "react";
import { Tasks } from "./tasks/Tasks";
import { Header } from "./header/Header";
import { NewTask } from "./tasks/NewTask";
import { Sidebar } from "./sidebar/Sidebar";

export function App() {
	return (
		<>
			<Sidebar />
			<header>
				<Header />
			</header>
			<main>
				<NewTask />
				<Tasks />
			</main>
			<footer>Footer</footer>
		</>
	);
}
