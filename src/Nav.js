import "./Nav.css";
import "./Nav";
import "velocity-animate/velocity.ui.min.js";

const Nav = () => {
	const handleClick = () => {
		var McButton = document.querySelector(".McButton");
		var McBar1 = document.querySelector(".bar1");
		var McBar3 = document.querySelector(".bar3");

		McButton.classList.toggle("active");

		if (McButton.classList.contains("active")) {
			McBar1.velocity({ top: "50%" }, { duration: 200, easing: "swing" });
			McBar3.velocity(
				{ top: "50%" },
				{ duration: 200, easing: "swing" }
			).velocity(
				{ transform: ["rotateZ(90deg)", "rotateZ(0deg)"] },
				{ duration: 800, delay: 200, easing: [500, 20] }
			);

			McButton.velocity(
				{ transform: ["rotateZ(135deg)", "rotateZ(0deg)"] },
				{ duration: 800, delay: 200, easing: [500, 20] }
			);
		} else {
			McButton.velocity(
				{ transform: ["rotateZ(0deg)", "rotateZ(135deg)"] },
				{ duration: 800, delay: 200, easing: [500, 20] }
			);
			McBar3.velocity(
				{ transform: ["rotateZ(0deg)", "rotateZ(90deg)"] },
				{ duration: 800, easing: [500, 20] }
			).velocity(
				{ top: "100%" },
				{ duration: 200, easing: "swing"}
			);
			McBar1.velocity(
				{ top: "0%" },
				{ duration: 200, easing: "swing", delay: 800 }
			);
		}
	};
	return (
		<nav>
			<div><h1>HelpCity</h1></div>
			<div className="McButton-container">
				<a onClick={handleClick} className="McButton" data="hamburger-menu">
					<b className="bar1"></b>
					<b></b>
					<b className="bar3"></b>
				</a>
			</div>
		</nav>
	);
};

export default Nav;
