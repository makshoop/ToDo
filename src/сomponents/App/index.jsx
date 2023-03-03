import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Today, Important, Planned, All } from "../pages/index";
import { Header } from "../header/Header";
import { Sidebar } from "../Sidebar";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import "./styles.css";
import { NewTask } from "../tasks/NewTask";

export function App() {
	const [isSidebarVisible, setSidebarVisible] = useState(true);

	// вынести сюда стейт из tasks и получение данных
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/tasks")
			.then((response) => response.json())
			.then((data) => setTasks(data));
	}, []);

	const toggleSidebarVisible = () => {
		setSidebarVisible(!isSidebarVisible);
	};

	const [parent] = useAutoAnimate();

	const addNewTask = (newTask) => {
		setTasks([...tasks, newTask]);
	};

	return (
		<>
			<Header toggleSidebarVisible={toggleSidebarVisible} />
			<main ref={parent} className="appMain">
				{isSidebarVisible && <Sidebar />}
				<div className="tasksContainer">
					<Routes>
						<Route
							path="/today"
							element={
								<>
									<NewTask onAddNewTask={addNewTask} isTodayTask={true} />
									<Today tasks={tasks} setTasks={setTasks} />
								</>
							}
						/>
						<Route
							path="/important"
							element={
								<>
									<NewTask onAddNewTask={addNewTask} isImportantTask={true} />
									<Important tasks={tasks} setTasks={setTasks} />
								</>
							}
						/>
						<Route
							path="/planned"
							element={
								<>
									<NewTask onAddNewTask={addNewTask} isDateSelected={true} />
									<Planned tasks={tasks} setTasks={setTasks} />
								</>
							}
						/>
						<Route
							path="/all"
							element={
								<>
									<NewTask
										onAddNewTask={addNewTask}
										// isImportantPage={isImportantPage}
									/>
									<All tasks={tasks} setTasks={setTasks} />
								</>
							}
						/>
					</Routes>
				</div>
			</main>
			{/* <footer>Footer</footer> */}
		</>
	);
}
