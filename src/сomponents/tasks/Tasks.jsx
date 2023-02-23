import React, { useState, useEffect } from "react";
import { NewTask } from "./NewTask";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
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

	useEffect(() => {
		const showCompletedFromStorage = JSON.parse(
			localStorage.getItem("showCompleted"),
		);
		setShowCompleted(showCompletedFromStorage ?? false);
	}, []);

	useEffect(() => {
		localStorage.setItem("showCompleted", JSON.stringify(showCompleted));
	}, [showCompleted]);

	function taskComplete(taskId) {
		const updatedTasks = tasks.map((task) => {
			if (task.id === taskId) {
				const updatedTask = {
					...task,
					completed: !task.completed,
					important: task.important,
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

	function deleteTask(taskId) {
		fetch(`http://localhost:3000/tasks/${taskId}`, {
			method: "DELETE",
		}).then(() => {
			const updatedTasks = tasks.filter((task) => task.id !== taskId);
			setTasks(updatedTasks);
		});
	}

	function toggleImportant(taskId) {
		const updatedTasks = tasks.map((task) => {
			if (task.id === taskId) {
				const updatedTask = {
					...task,
					important: !task.important,
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
				<div
					className="taskCard"
					key={task.id}
					style={{
						border: task.important ? "0.1em solid #4051b5" : "none",
					}}
				>
					<input
						type="checkbox"
						checked={task.completed}
						onChange={() => taskComplete(task.id)}
					/>
					<label>
						<p
							style={{
								textDecoration: task.completed ? "line-through" : "none",
							}}
						>
							{task.title}
						</p>
					</label>
					<div className="taskButtons">
						<button
							className="importantTaskButton"
							onClick={() => toggleImportant(task.id)}
						>
							{task.important ? <AiTwotoneStar /> : <AiOutlineStar />}
						</button>
						<button
							className="deleteTaskButton"
							onClick={() => deleteTask(task.id)}
						>
							<RiDeleteBin5Fill />
						</button>
					</div>
				</div>
			))}
			<div className="completedBlock">
				<h2 className="tasksTitle">Completed</h2>
				<button onClick={toggleShowCompleted}>
					{showCompleted ? <FiChevronUp /> : <FiChevronDown />}
				</button>
			</div>
			{showCompleted && (
				<div ref={parent}>
					{completedTasks.map((task) => (
						<div
							className="taskCard"
							key={task.id}
							style={{
								border: task.important ? "0.1em solid #4051b5" : "none",
							}}
						>
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
							<div className="taskButtons">
								<button
									className="importantTaskButton"
									onClick={() => toggleImportant(task.id)}
								>
									{task.important ? <AiTwotoneStar /> : <AiOutlineStar />}
								</button>
								<button
									className="deleteTaskButton"
									onClick={() => deleteTask(task.id)}
								>
									<RiDeleteBin5Fill />
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
