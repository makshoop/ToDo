// import React from "react";

// export default function NotesList() {
// 	const [notes, setNotes] = useState([
// 		{ id: 1, title: "Note 1", content: "This is the content of note 1" },
// 		{ id: 2, title: "Note 2", content: "This is the content of note 2" },
// 		{ id: 3, title: "Note 3", content: "This is the content of note 3" },
// 	]);

// 	return (
// 		<div>
// 			{notes.map((note) => (
// 				<div key={note.id}>
// 					<h2>{note.title}</h2>
// 					<p>{note.content}</p>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

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
				task.completed = !task.completed;
			}
			return task;
			// + запрос для изменения данных на сервере
		});
		setTasks(updatedTasks);
	}

	return (
		<div>
			<h1>Tasks</h1>
			{tasks.map((task) => (
				<div key={task.id}>
					<hr />
					<input
						type="checkbox"
						checked={task.completed}
						onChange={() => taskComplete(task.id)}
					/>
					<h3
						style={{
							textDecoration: task.completed ? "line-through" : "none",
						}}
					>
						{task.title}
					</h3>
					<p>{task.description}</p>
					<hr />
				</div>
			))}
		</div>
	);
}
