import React, { useState, useEffect } from "react";
import { NewTask } from "./NewTask";

import { RiDeleteBin5Fill } from "react-icons/ri";

export function Tasks() {
	const [tasks, setTasks] = useState([]);

	console.log(tasks);

	useEffect(() => {
		fetch("http://localhost:3000/tasks")
			.then((response) => response.json())
			.then((data) => setTasks(data));
	}, []);

	function taskComplete(taskId) {
		const updatedTasks = tasks.map((task) => {
			if (task.id === taskId) {
				const updatedTask = {
					...task,
					completed: !task.completed,
				};
				fetch(`http://localhost:3000/tasks/${taskId}`, {
					method: "PUT",
					body: JSON.stringify(updatedTask),
					headers: { "Content-Type": "application/json" },
				});
				return updatedTask;
			}
			return task;
		});
		setTasks(updatedTasks);
	}

	const completedTasks = tasks.filter((task) => task.completed);
	const uncompletedTasks = tasks.filter((task) => !task.completed);

	const addNewTask = (newTask) => {
		setTasks([...tasks, newTask]);
	};

	return (
		<div>
			<NewTask onAddNewTask={addNewTask} />
			<h1 className="tasksTitle">Tasks</h1>
			{uncompletedTasks.map((task) => (
				<div className="taskCard" key={task.id}>
					<input
						type="checkbox"
						checked={task.completed}
						onChange={() =>
							setTasks(
								tasks.map((t) =>
									t.id === task.id ? { ...t, completed: !t.completed } : t,
								),
							)
						}
					/>
					<p
						style={{
							textDecoration: task.completed ? "line-through" : "none",
						}}
					>
						{task.title}
					</p>
					<button className="deleteTaskButton">
						<RiDeleteBin5Fill />
					</button>
				</div>
			))}
			<h2 className="tasksTitle">Completed</h2>
			{completedTasks.map((task) => (
				<div className="taskCard" key={task.id}>
					<input
						type="checkbox"
						checked={task.completed}
						onChange={() =>
							setTasks(
								tasks.map((t) =>
									t.id === task.id ? { ...t, completed: !t.completed } : t,
								),
							)
						}
					/>
					<p
						style={{
							textDecoration: task.completed ? "line-through" : "none",
						}}
					>
						{task.title}
					</p>
					<button className="deleteTaskButton">
						<RiDeleteBin5Fill />
					</button>
				</div>
			))}
		</div>
	);
}
