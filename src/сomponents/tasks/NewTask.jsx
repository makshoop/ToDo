import React, { useState, useEffect } from "react";

export function NewTask({ onAddNewTask }) {
	const [newTask, setNewTask] = useState("");

	useEffect(() => {
		const storedNewTask = localStorage.getItem("newTask");
		if (storedNewTask) {
			setNewTask(storedNewTask);
		}
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();

		const newTaskItem = {
			id: Date.now(),
			title: newTask,
			completed: false,
			today: false,
			important: false,
			planned: false,
		};

		fetch("http://localhost:3000/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTaskItem),
		})
			.then((response) => response.json())
			.then((data) => onAddNewTask(data))
			.catch((error) => console.error(error));

		setNewTask("");

		localStorage.setItem("newTask", "");
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSubmit(event);
		}
	};

	return (
		<div className="newTask">
			<form onSubmit={handleSubmit}>
				<input
					placeholder="  New Task"
					type="text"
					value={newTask}
					onChange={(event) => {
						setNewTask(event.target.value);
						localStorage.setItem("newTask", event.target.value);
					}}
					onKeyDown={handleKeyDown}
				/>
				<button type="submit" onClick={handleSubmit}>
					{" "}
					SAVE{" "}
				</button>
			</form>
		</div>
	);
}
