import React, { useState } from "react";
import { Tasks } from "../tasks/Tasks";
import { Header } from "../header/Header";
import { Sidebar } from "../Sidebar";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import "./styles.css";

export function App() {
	const [isSidebarVisible, setSidebarVisible] = useState(true);

	const toggleSidebarVisible = () => {
		setSidebarVisible(!isSidebarVisible);
	};

	const [parent] = useAutoAnimate();

	return (
		<>
			<Header toggleSidebarVisible={toggleSidebarVisible} />
			<main ref={parent} className="appMain">
				{isSidebarVisible && <Sidebar />}
				<div className="tasksContainer">
					<Tasks />
				</div>
			</main>
			{/* <footer>Footer</footer> */}
		</>
	);
}
