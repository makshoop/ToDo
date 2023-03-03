import dayjs from "dayjs";
import React from "react";
import { Tasks } from "../tasks/Tasks";

export function All({ tasks, setTasks }) {
	return <Tasks title="All Tasks" tasks={tasks} setTasks={setTasks} />;
}

export function Planned({ tasks, setTasks }) {
	const plannedTasks = tasks.filter((task) => task.date);

	return <Tasks title="Planned" tasks={plannedTasks} setTasks={setTasks} />;
}

export function Important({ tasks, setTasks }) {
	const importantTasks = tasks.filter((task) => task.important);

	return (
		<Tasks
			title="Important"
			tasks={importantTasks}
			setTasks={setTasks}
			isImportantPage={true}
		/>
	);
}

export function Today({ tasks, setTasks }) {
	const today = dayjs().format("DD.MM.YYYY");
	const uncompletedTasksToday = tasks.filter(
		(task) => dayjs(task.date).format("DD.MM.YYYY") === today,
	);
	return (
		<Tasks title="Today" tasks={uncompletedTasksToday} setTasks={setTasks} />
	);
}
