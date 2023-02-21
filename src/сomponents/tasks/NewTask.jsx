import React, { useState } from "react";

export function NewTask() {
	const [newTask, setNewTask] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const newTaskItem = {
			id: Date.now(),
			title: newTask,
		};

		fetch("http://localhost:3000/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTaskItem),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));

		setNewTask("");
	};

	return (
		<div className="newTask">
			<form onSubmit={handleSubmit}>
				<input
					placeholder="New Task"
					type="text"
					value={newTask}
					onChange={(event) => setNewTask(event.target.value)}
				/>
			</form>
		</div>
	);
}
