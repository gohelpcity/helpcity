import video from "./intro_video.mp4";
import image1 from "./cleaning1.jpg";
import image2 from "./cleaning2.jpg";
import image3 from "./money.jpg";
import "./Home.css";
import services from "./services.jpg";
// Import Swiper React components
// import { register } from "swiper/element/bundle";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";

const Home = () => {
	// const swiperElRef = useRef(null);

	// useEffect(() => {
	// 	// listen for Swiper events using addEventListener
	// 	swiperElRef.current.addEventListener("progress", (e) => {
	// 		const [swiper, progress] = e.detail;
	// 		// console.log(progress);
	// 	});

	// 	swiperElRef.current.addEventListener("slidechange", (e) => {
	// 		// console.log("slide changed");
	// 	});
	// }, []);

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
			<video autoPlay loop muted playsInline>
				<source src={video} type="video/mp4" />
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
			<div className="services">
				<h1>These are our services FREE to you</h1>
				<swiper-container
					// ref={swiperElRef}
					slides-per-view="1"
					speed="2"
					loop="true"
					css-mode="true"
					navigation="true"
					pagination="true"
				>
					<swiper-slide>
						<img alt="..." src={services}></img>
					</swiper-slide>
					<swiper-slide>
						<img alt="..." src={services}></img>
					</swiper-slide>
					<swiper-slide>
						<img alt="..." src={services}></img>
					</swiper-slide>
				</swiper-container>
			</div>
		</div>
	);
};

export default Home;
