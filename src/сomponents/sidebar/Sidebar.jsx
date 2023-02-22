import React, { useState } from "react";

export function Sidebar() {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	const handleToggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const handleToggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<nav
			className={`sidebar ${sidebarOpen ? "" : "close"} ${
				darkMode ? "dark" : ""
			}`}
		>
			<header>
				<div className="image-text">
					<span className="image">{/*<img src="logo.png" alt="" />*/}</span>

					<div className="text logo-text">
						<span className="name">Codinglab</span>
						<span className="profession">Web developer</span>
					</div>
				</div>

				<i
					className="bx bx-chevron-right toggle"
					onClick={handleToggleSidebar}
				></i>
			</header>

			<div className="menu-bar">
				<div className="menu">
					<li className="search-box" onClick={() => setSidebarOpen(true)}>
						<i className="bx bx-search icon"></i>
						<input type="text" placeholder="Search..." />
					</li>

					<ul className="menu-links">
						<li className="nav-link">
							<a href="#">
								<i className="bx bx-home-alt icon"></i>
								<span className="text nav-text">Dashboard</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#">
								<i className="bx bx-bar-chart-alt-2 icon"></i>
								<span className="text nav-text">Revenue</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#">
								<i className="bx bx-bell icon"></i>
								<span className="text nav-text">Notifications</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#">
								<i className="bx bx-pie-chart-alt icon"></i>
								<span className="text nav-text">Analytics</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#">
								<i className="bx bx-heart icon"></i>
								<span className="text nav-text">Likes</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#">
								<i className="bx bx-wallet icon"></i>
								<span className="text nav-text">Wallets</span>
							</a>
						</li>
					</ul>
				</div>

				<div className="bottom-content">
					<li>
						<a href="#">
							<i className="bx bx-log-out icon"></i>
							<span className="text nav-text">Logout</span>
						</a>
					</li>

					{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<li className="mode" onClick={handleToggleDarkMode}>
						<div className="sun-moon">
							<i className="bx bx-moon icon moon"></i>
							<i className="bx bx-sun icon sun"></i>
						</div>
						<span className="mode-text text">
							{darkMode ? "Light mode" : "Dark mode"}
						</span>

						<div className="toggle-switch">
							<span className="switch"></span>
						</div>
					</li>
				</div>
			</div>
		</nav>
	);
}

export function Home() {
	return (
		<section className="home">
			<div className="text">Dashboard Sidebar</div>
		</section>
	);
}

export function Sidebar2() {
	const [sidebarClosed, setSidebarClosed] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	const toggleSidebar = () => {
		setSidebarClosed(!sidebarClosed);
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={darkMode ? "dark" : ""}>
			{/* <nav className={sidebarClosed ? 'sidebar close' : 'sidebar'}> */}
			<header>
				<div className="image-text">
					<span className="image">{/* <img src="logo.png" alt=""> */}</span>

					<div className="text logo-text">
						<span className="name">Codinglab</span>
						<span className="profession">Web developer</span>
					</div>
				</div>

				<i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
			</header>

			<div className="menu-bar">
				<div className="menu">
					<li className="search-box" onClick={() => setSidebarClosed(true)}>
						<i className="bx bx-search icon"></i>
						<input type="text" placeholder="Search..." />
					</li>

					<ul className="menu-links">
						<li className="nav-link">
							<a href="#">
								<i className="bx bx-home-alt icon"></i>
								<span className="text nav-text">Dashboard</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#">
								<i className="bx bx-bar-chart-alt-2 icon"></i>
								<span className="text nav-text">Revenue</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#">
								<i className="bx bx-bell icon"></i>
								<span className="text nav-text">Notifications</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#">
								<i className="bx bx-pie-chart-alt icon"></i>
								<span className="text nav-text">Analytics</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#">
								<i className="bx bx-heart icon"></i>
								<span className="text nav-text">Likes</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#">
								<i className="bx bx-wallet icon"></i>
								<span className="text nav-text">Wallets</span>
							</a>
						</li>
					</ul>
				</div>

				<div className="bottom-content">
					<li className="" onClick={() => setSidebarClosed(true)}>
						<a href="#">
							<i className="bx bx-log-out icon"></i>
							<span className="text nav-text">Logout</span>
						</a>
					</li>

					<li className="mode" onClick={toggleDarkMode}>
						<div className="sun-moon">
							<i className="bx bx-moon icon moon"></i>
							<i className="bx bx-sun icon sun"></i>
						</div>
						<span className="mode-text text">{darkMode}</span>
						<div className="toggle-switch">
							<span className="switch"></span>
						</div>
					</li>
				</div>
				{/* </nav> */}
				<section className="home">
					<div className="text">Dashboard Sidebar</div>
				</section>
			</div>
		</div>
	);
}
