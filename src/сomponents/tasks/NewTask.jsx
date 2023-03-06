import dayjs from "dayjs";
import React, { useState, useEffect } from "react";

export function NewTask({
	onAddNewTask,
	isImportantTask,
	isTodayTask,
	isDateSelected,
}) {
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
			important: isImportantTask ? true : false,
			planned: date !== null,
			date: isTodayTask ? dayjs() : date,
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

	const handleDateChange = (event) => {
		setDate(dayjs(event.target.value));
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
				{!isTodayTask && (
					<input
						type="date"
						name="calendar"
						min="1970-01-01"
						max="2030-12-31"
						onChange={handleDateChange}
					/>
				)}
				<button type="submit" disabled={isDateSelected && !date}>
					✓
				</button>
			</form>
		</div>
	);
}
