import intro from "../Videos/intro_video.mp4";
import image1 from "../Images/cleaning1.jpg";
import image2 from "../Images/cleaning2.jpg";
import image3 from "../Images/money.jpg";
import fix from "../Images/fix.jpg";
import clean from "../Images/cleanIt.jpg";
import troubleShoot from "../Images/troubleShoot.jpg";
import build from "../Images/buildIt.jpg";
import trim from "../Images/trimIt.jpg";
import "./Home.css";
import services from "../Images/services.jpg";
// Import Swiper React components
// import { register } from "swiper/element/bundle";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";

const Home = () => {
	useEffect(() => {
		const title = document.querySelectorAll(".title");
		let myObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// entry.target.src = "./profile_pic.png";
					entry.target.classList.add("animate__animated");
					entry.target.classList.add("animate__fadeInRight");
					entry.target.classList.remove("invisible");
					observer.unobserve(entry.target);
				}
			});
		});
		[...title].forEach((i) => {
			myObserver.observe(i);
		});

		const img = document.querySelectorAll(".image");
		myObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// entry.target.src = "./profile_pic.png";
					entry.target.classList.add("animate__animated");
					entry.target.classList.add("animate__flipInX");
					entry.target.classList.remove("invisible");
					observer.unobserve(entry.target);
				}
			});
		});
		[...img].forEach((i) => {
			myObserver.observe(i);
		});

		const service = document.querySelectorAll(".services");
		myObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// entry.target.src = "./profile_pic.png";
					entry.target.classList.add("animate__animated");
					entry.target.classList.add("animate__fadeInUp");
					entry.target.classList.remove("invisible");
					observer.unobserve(entry.target);
				}
			});
		});
		[...service].forEach((i) => {
			myObserver.observe(i);
		});

		// myObserver = new IntersectionObserver((entries, observer) => {
		// 	entries.forEach((entry) => {
		// 		if (entry.isIntersecting) {
		// 			entry.target.classList.add("fade-in-left");
		// 			entry.target.classList.remove("invisible");
		// 			observer.unobserve(entry.target);
		// 		}
		// 	});
		// });
		// myObserver.observe(document.querySelector(".intro"));

		// myObserver = new IntersectionObserver((entries, observer) => {
		// 	entries.forEach((entry) => {
		// 		if (entry.isIntersecting) {
		// 			entry.target.classList.add("zoom-in");
		// 			entry.target.classList.remove("invisible");
		// 			observer.unobserve(entry.target);
		// 		}
		// 	});
		// });

		// document.querySelectorAll(".skills").forEach((skill) => {
		// 	myObserver.observe(skill);
		// });

		// document.querySelectorAll(".list-skillset").forEach((skill) => {
		// 	myObserver.observe(skill);
		// });
	}, []);

	return (
		<div className="home">
			<video autoPlay loop muted playsInline className="intro-vid">
				<source src={intro} type="video/mp4" />
			</video>
			<h1 className="animate__animated animate__pulse">
				Are you a Single Mom or Widow who needs help?{" "}
			</h1>
			<button>We're here for you</button>
			<div className="collection">
				<div className="container">
					<h2 className="title invisible">Tougher jobs around the house?</h2>
					<img
						className="image invisible"
						alt="a women is doing chore"
						src={image1}
					></img>
				</div>

				<div className="container">
					<h2 className="title invisible">
						Desperately needing to catch up on chores?
					</h2>
					<img
						className="image invisible"
						alt="a women is doing chore"
						src={image2}
					></img>
				</div>

				<div className="container ">
					<h2 className="title invisible">Unable to afford hired help?</h2>
					<img
						className="image invisible"
						alt="financial problems"
						src={image3}
					></img>
				</div>
			</div>

			<div className="separator"></div>

			<div className="services">
				<h1>These are our services FREE to you</h1>
				<swiper-container
					// ref={swiperElRef}
					slides-per-view="1"
					loop="true"
					css-mode="true"
					navigation="true"
					// pagination="true"
				>
					<swiper-slide>
						<img alt="..." src={fix}></img>
						<h2> Fix it.</h2>
						<p>
							Got a squeaky cabinet or a hole in the wall? We help with small
							fixes in the house. We come with power tools!
						</p>
					</swiper-slide>

					<swiper-slide>
						<img alt="..." src={trim}></img>
						<h2> Trim it.</h2>
						<p>
							We help with basic landscaping such as weeding, trimming, raking,
							and mowing!
						</p>
					</swiper-slide>

					<swiper-slide>
						<img alt="..." src={build}></img>
						<h2> Build it.</h2>
						<p>Need help assembling furniture? Leave it to us!</p>
					</swiper-slide>

					<swiper-slide>
						<img alt="..." src={services}></img>
						<h2> Move it.</h2>
						<p>Having trouble moving bigger items? Let us do it!</p>
					</swiper-slide>

					<swiper-slide>
						<img alt="..." src={clean}></img>
						<h2> Clean it.</h2>
						<p>
							Super behind on cleaning and organization? Our very own interior
							organizer, Annabelle, can help you optimize!
						</p>
					</swiper-slide>

					<swiper-slide>
						<img alt="..." src={troubleShoot}></img>
						<h2> Trouble shoot it.</h2>
						<p>
							Confused on how to set up the internet or update your computer?
							Our own in-house engineers, Ago & Jeffrey, have your back!
						</p>
					</swiper-slide>
				</swiper-container>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSdNSXACl69hEnN7W53ORlbXZVCoJw2Q9aSb6hHjQ4tDrKLuNg/viewform"
					target="_blank"
					rel="noreferrer"
				>
					<h3>Request help!</h3>
				</a>
			</div>

			<div className="volunteer">
				<h2>
					Do you have a group interested in serving moms & widows in your area?
				</h2>
				<p>
					We will walk your group through the simple steps. Then you’ll be all
					set to volunteer for 2 hours on a Saturday morning in the home of a
					low-income single mother or widow who requested our help. (People of
					all skill levels welcome!)
				</p>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSeHbHJe8TLdMxIM5FulO3hLCeMwS5l8QL549UKfzzSDm_cPFQ/viewform"
					target="_blank"
					rel="noreferrer"
				>
					<h3>We're interested!</h3>
				</a>
			</div>

			<div className="subscribe">
				<h2>Stay up to date on HelpCity!</h2>
				<p>Sign up with your email address to receive news and updates.</p>
				<button>
					<h3>Subscribe</h3>
				</button>
			</div>

			<footer>
				<p>HelpCity | Seattle, WA (425) 202 - 5280</p>
				<p>© HelpCity 2023 | Privacy Policy | Terms of Service</p>
				<div className="social-media">
					<i className="fa-brands fa-square-facebook fa-2xl"></i>
					<i className="fa-solid fa-envelope fa-2xl"></i>
				</div>
			</footer>
		</div>
	);
};

export default Home;
