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
		const navBar = document.querySelector(".nav-bar");
		const nav = document.querySelector(".nav");
		const logo = document.querySelector(".logo");
		const allPages = ["home", "about", "contact", "openings", "store", "faq"];
		let currPage;
		for (let i = 0; i < allPages.length; i++) {
			if (document.querySelector(`.${allPages[i]}`) !== null) {
				currPage = document.querySelector(`.${allPages[i]}`);
				break;
			}
		}

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
			currPage.style.display = "none";
			logo.style.color = "#282c34";

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
			currPage.style.display = "inline";
			logo.style.color = "white";
		}

		// Handle nav bar and on click
		navBar.classList.toggle("nav-bar-active");
		menu.classList.toggle("menu-active");
		[...McButton.children].forEach((b) => {
			b.classList.toggle("McButton-active");
		});
		nav.classList.toggle("nav-active");

		// remove animate classes after first render
		const animateElement = [...document.querySelectorAll(".animate__animated")];
		if (animateElement.length > 0) {
			animateElement.forEach((e) => {
				e.classList.remove("animate__animated");
				e.classList.remove("animate__slow");
				if (e.classList.contains("animate__flipInX")) {
					e.classList.remove("animate__flipInX");
				}

				if (e.classList.contains("animate__fadeInUp")) {
					e.classList.remove("animate__fadeInUp");
				}

				if (e.classList.contains("animate__fadeInRight")) {
					e.classList.remove("animate__fadeInRight");
				}
			});
		}
	};
	return (
		<Router>
			<nav className="nav">
				<div className="nav-bar">
					<div>
						<Link onClick={() => {}} to="/helpcity">
							<h1 className="logo">HelpCity</h1>
						</Link>
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
					<li className="menu-item">
						<Link onClick={handleClick} to="/helpcity">
							Home
						</Link>
					</li>
					<li className="menu-item">
						<Link onClick={handleClick} to="/helpcity/about">
							About
						</Link>
					</li>
					<li className="menu-item">
						<Link onClick={handleClick} to="/helpcity/faq">
							FAQ
						</Link>
					</li>
					<li className="menu-item">
						<Link onClick={handleClick} to="/helpcity/store">
							Store
						</Link>
					</li>
					<li className="menu-item">
						<Link onClick={handleClick} to="/helpcity/contact">
							Contact
						</Link>
					</li>
					<li className="menu-item">
						<Link onClick={handleClick} to="/helpcity/openings">
							Openings
						</Link>
					</li>
				</ul>
				<Routes>
					<Route path="/helpcity" exact element={<Home />}></Route>
					<Route path="/helpcity/about" element={<About />}></Route>
					<Route path="/helpcity/faq" element={<Faq />}></Route>
					<Route path="/helpcity/store" element={<Store />}></Route>
					<Route path="/helpcity/contact" element={<Contact />}></Route>
					<Route path="/helpcity/openings" element={<Openings />}></Route>
					{/* <Route path="*" element={404 PAGE}></Route> */}
				</Routes>
			</nav>
		</Router>
	);
};

export default Nav;
