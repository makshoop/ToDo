import React, { useState } from "react";
import "./styles.css";

export function LoginCard() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="loginCard">
			<h2>Login</h2>
			<form className="loginForm" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={handleUsernameChange}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={handlePasswordChange}
				/>
				{/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a href="#">Forget your password?</a>
				<button type="submit">LOGIN</button>
			</form>
		</div>
	);
}
