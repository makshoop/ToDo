import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Today, Important, Planned, Tasks } from "../tasks/Tasks";
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
					<Routes>
						<Route path="/today" element={<Today />} />
						<Route path="/important" element={<Important />} />
						<Route path="/planned" element={<Planned />} />
						<Route path="/all" element={<Tasks />} />
					</Routes>
				</div>
			</main>
			{/* <footer>Footer</footer> */}
		</>
	);
}
