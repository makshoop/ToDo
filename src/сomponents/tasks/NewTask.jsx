import React, { useState } from "react";

export function NewTask({ onAddNewTask }) {
	const [newTask, setNewTask] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const newTaskItem = {
			id: Date.now(),
			title: newTask,
			completed: false,
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
					placeholder="New Task"
					type="text"
					value={newTask}
					onChange={(event) => setNewTask(event.target.value)}
					onKeyDown={handleKeyDown}
				/>
			</form>
		</div>
	);
}
