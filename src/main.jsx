import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./сomponents/App";
import "./main.css";
import "./сomponents/tasks/Tasks.css";
import "./сomponents/header/Header.css";
import "./сomponents/tasks/NewTask.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</>,
);
