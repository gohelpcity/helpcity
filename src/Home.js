import video from "./intro_video.mp4";
import "./Home.css";

const Home = () => {
	return (
		<div>
			<video autoPlay loop muted>
				<source
					src={video}
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default Home;
