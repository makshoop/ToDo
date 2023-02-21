import React, { useState, useEffect } from "react";

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

	return (
		<div>
			<h1>Tasks</h1>
			{uncompletedTasks.map((task) => (
				<div className="taskCard" key={task.id}>
					<input
						type="checkbox"
						checked={task.completed}
						onChange={() => taskComplete(task.id)}
					/>
					<p
						style={{
							textDecoration: task.completed ? "line-through" : "none",
						}}
					>
						{task.title}
					</p>
				</div>
			))}
			<h2>Completed</h2>
			{completedTasks.map((task) => (
				<div className="taskCard" key={task.id}>
					<input
						type="checkbox"
						checked={task.completed}
						onChange={() => taskComplete(task.id)}
					/>
					<p
						style={{
							textDecoration: task.completed ? "line-through" : "none",
						}}
					>
						{task.title}
					</p>
				</div>
			))}
		</div>
	);
}
