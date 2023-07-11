import video from "./intro_video.mp4";
import image1 from "./cleaning1.jpg";
import image2 from "./cleaning2.jpg";
import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<video autoPlay loop muted>
				<source src={video} type="video/mp4" />
			</video>
			<h1>Are you a Single Mom or Widow who needs help? </h1>
			<button>We're here for you</button>

			<div className="collection">
				<div className="container">
					<img alt="a women is doing chore" src={image1}></img>
					<p>
						Are there tougher jobs around the house that are hard to do on your
						own?
					</p>
				</div>

				<div className="container">
					<img alt="a women is doing chore" src={image2}></img>
					<p>
						Are you desperately needing to catch up on chores you’ve fallen
						behind on?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
