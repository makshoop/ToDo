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

export default function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/tasks")
			.then((response) => response.json())
			.then((data) => setTasks(data));
	}, []);

	function taskComplete(taskId) {
		const updatedTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return { ...task, completed: true };
			} else {
				return task;
			}
		});
		setTasks(updatedTasks);
	}

	return (
		<div>
			<h1>Tasks</h1>
			{tasks.map((task) => (
				<h3 key={task.id}>
					<hr />
					<input
						type="checkbox"
						checked={task.completed}
						onChange={() => taskComplete(task.id)}
					/>
					<span
						style={{
							textDecoration: task.completed ? "line-through" : "none",
						}}
					>
						{task.title}
					</span>
					<h5>{task.description}</h5>
					<hr />
				</h3>
			))}
		</div>
	);
}
