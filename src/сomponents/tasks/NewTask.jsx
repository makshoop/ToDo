import dayjs from "dayjs";
import React, { useState, useEffect } from "react";

export function NewTask({ onAddNewTask, isImportantPage }) {
	const [newTask, setNewTask] = useState("");
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
			important: isImportantPage ? true : false,
			planned: date !== null,
			date: date,
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
						setDate(dayjs(event.target.value));
					}}
				/>
				<button type="submit"> SAVE </button>
			</form>
		</div>
	);
}
