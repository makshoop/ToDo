import React, { useState, useEffect } from "react";

export function NewTask({ onAddNewTask }) {
	const [newTask, setNewTask] = useState("");
	const [date1, setDate1] = useState(null);
	const [date, setDate] = useState(null);

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
			planned: date !== null,
			date: date,
			date1: date1,
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
		setDate(null);
		setDate1(null);

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
				<input
					type="date"
					id="start"
					name="trip-start"
					min="1970-01-01"
					max="2030-12-31"
					onChange={(event) => {
						setDate1(event.target.value);
						setDate(Date.parse(event.target.value));
					}}
				/>
				<button type="submit" onClick={handleSubmit}>
					{" "}
					SAVE{" "}
				</button>
			</form>
		</div>
	);
}
