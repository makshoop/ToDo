import React, { useState, useEffect } from "react";
import { NewTask } from "./NewTask";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function Tasks() {
	const [tasks, setTasks] = useState([]);
	const [showCompleted, setShowCompleted] = useState(false);

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

	const toggleShowCompleted = () => {
		setShowCompleted(!showCompleted);
	};

	const addNewTask = (newTask) => {
		setTasks([...tasks, newTask]);
	};

	const [parent] = useAutoAnimate();

	return (
		<div ref={parent}>
			<NewTask onAddNewTask={addNewTask} />
			<h1 className="tasksTitle">Tasks</h1>
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
					<button className="deleteTaskButton">
						<RiDeleteBin5Fill />
					</button>
				</div>
			))}
			<div className="completedBlock">
				<h2 className="tasksTitle">Completed</h2>
				<button onClick={toggleShowCompleted}>
					{showCompleted ? <FiChevronUp /> : <FiChevronDown />}
				</button>
			</div>
			{showCompleted && (
				<div>
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
			)}
		</div>
	);
}
