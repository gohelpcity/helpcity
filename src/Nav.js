import "./Nav.css";
import "./Nav";
import "velocity-animate/velocity.ui.min.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import Store from "./Store";
import Contact from "./Contact";
import Openings from "./Openings";

const Nav = () => {
	const handleClick = () => {
		const McButton = document.querySelector(".McButton");
		const McBar1 = document.querySelector(".bar1");
		const McBar3 = document.querySelector(".bar3");
		const menu = document.querySelector(".menu");
		const nav = document.querySelector(".nav-bar");

		McButton.classList.toggle("active");

		// Handle menu icon on click
		if (McButton.classList.contains("active")) {
			McBar1.velocity({ top: "50%" }, { duration: 150, easing: "swing" });
			McBar3.velocity(
				{ top: "50%" },
				{ duration: 150, easing: "swing" }
			).velocity(
				{ transform: ["rotateZ(90deg)", "rotateZ(0deg)"] },
				{ duration: 300, delay: 150, easing: [100, 20] }
			);

			McButton.velocity(
				{ transform: ["rotateZ(135deg)", "rotateZ(0deg)"] },
				{ duration: 300, delay: 150, easing: [100, 20] }
			);
		} else {
			McButton.velocity(
				{ transform: ["rotateZ(0deg)", "rotateZ(135deg)"] },
				{ duration: 300, delay: 150, easing: [100, 20] }
			);
			McBar3.velocity(
				{ transform: ["rotateZ(0deg)", "rotateZ(90deg)"] },
				{ duration: 300, easing: [100, 20] }
			).velocity({ top: "100%" }, { duration: 150, easing: "swing" });
			McBar1.velocity(
				{ top: "0%" },
				{ duration: 150, easing: "swing", delay: 300 }
			);
		}

		// Handle nav bar on click
		nav.classList.toggle("nav-bar-active");
		menu.classList.toggle("menu-active");
		[...McButton.children].forEach((b) => {
			b.classList.toggle("McButton-active");
		});
	};
	return (
		<Router>
			<nav className="nav">
				<div className="nav-bar">
					<div>
						<h1>HelpCity</h1>
					</div>
					<div className="McButton-container">
						<a onClick={handleClick} className="McButton" data="hamburger-menu">
							<b className="bar1"></b>
							<b className="bar2"></b>
							<b className="bar3"></b>
						</a>
					</div>
				</div>
				<ul className="menu">
					<li>
						<Link onClick={handleClick} to="/">
							Home
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to="/about">
							About
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to="/faq">
							FAQ
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to="/store">
							Store
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to="/contact">
							Contact
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to="/openings">
							Openings
						</Link>
					</li>
				</ul>
				<Routes>
					<Route path="/" exact element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/faq" element={<Faq />}></Route>
					<Route path="/store" element={<Store />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/openings" element={<Openings />}></Route>
					<Route path="*" element={<Home />}></Route>
				</Routes>
			</nav>
		</Router>
	);
};

export default Nav;
