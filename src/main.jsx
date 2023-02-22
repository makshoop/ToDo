import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./сomponents/App";
import "./main.css";
import "./сomponents/tasks/Tasks.css";
import "./сomponents/header/Header.css";
import "./сomponents/tasks/NewTask.css";
import "./сomponents/sidebar/Sidebar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<App />
	</>,
);
