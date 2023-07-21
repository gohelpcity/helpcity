import "./About.css";
import pic1 from "../Images/mission_a.jpg";
import pic2 from "../Images/mission_b.jpg";

const About = () => {
	return (
		<div className="about">
			<h1 className="title">ABOUT</h1>
			<div className="underline"></div>

			<section className="mission">
				<h2>Our Mission</h2>
				<p>
					To bring relief to low-income single mothers and widows by dispatching
					volunteer groups to help with physically demanding tasks in their
					homes.
				</p>
				<img src={pic1} alt="Volunteer groups"></img>
			</section>

			<section className="vision">
				<h2>Our Vision</h2>
				<p>
					To make Seattle a city of help and refuge for single mothers and
					widows in distress.
				</p>
				<img src={pic2} alt="Volunteer groups"></img>
			</section>

			<div className="separator"></div>
			<div className="space"></div>
			<section className="story">
				<h2>Our Story</h2>
				<p>
					According to a survey of more than 40,000 voters in over 100
					countries, the word voted most beautiful was “Mother.”
				</p>
				<p>It goes without saying why.</p>
				<p>
					My mother (Bryan’s) was an immigrant widow and single mother for most
					of my life, and I was a witness to how vulnerable and helpless she
					was. As a boy, it made me feel angry to see her have to solicit help
					from men in the neighborhood and in the church for simple repairs
					around the house and helpless that I couldn’t do more.
				</p>
				<p>But stories like this are not unusual.</p>
				<p>
					HelpCity is a tribute to extraordinary women who deserve a break from
					time to time. We are calling all sons and daughters to join us in the
					movement of honoring the most disadvantaged single mothers and widows
					in our city.
				</p>
			</section>
		</div>
	);
};

export default About;
