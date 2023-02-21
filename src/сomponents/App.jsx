import React from "react";
import { Tasks } from "./tasks/Tasks";
import { Header } from "./header/Header";
import { NewTask } from "./tasks/NewTask";

export function App() {
	return (
		<>
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
