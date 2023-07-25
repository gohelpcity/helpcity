import "./About.css";
import pic1 from "../Images/mission_a.jpg";
import pic2 from "../Images/mission_b.jpg";
import pic3 from "../Images/groupPic.jpg";
import pic4 from "../Images/kairos.png";

const About = () => {
	return (
		<div className="about">
			<h1 className="title">ABOUT</h1>
			<div className="underline"></div>

			<div className="container">
				<section className="item">
					<h2>Our Mission</h2>
					<p>
						To bring relief to low-income single mothers and widows by
						dispatching volunteer groups to help with physically demanding tasks
						in their homes.
					</p>
					<img src={pic1} alt="Volunteer groups"></img>
				</section>

				<section className="item">
					<h2>Our Vision</h2>
					<p>
						To make Seattle a city of help and refuge for single mothers and
						widows in distress.
					</p>
					<img src={pic2} alt="Volunteer groups"></img>
				</section>
			</div>

			<div className="separator"></div>

			<div className="container">
				<section className="story">
					<h2>Our Story</h2>
					<p>
						According to a survey of more than 40,000 voters in over 100
						countries, the word voted most beautiful was “Mother.”
					</p>
					<p>It goes without saying why.</p>
					<p>
						My mother (Bryan’s) was an immigrant widow and single mother for
						most of my life, and I was a witness to how vulnerable and helpless
						she was. As a boy, it made me feel angry to see her have to solicit
						help from men in the neighborhood and in the church for simple
						repairs around the house and helpless that I couldn’t do more.
					</p>
					<p>But stories like this are not unusual.</p>
					<p>
						HelpCity is a tribute to extraordinary women who deserve a break
						from time to time. We are calling all sons and daughters to join us
						in the movement of honoring the most disadvantaged single mothers
						and widows in our city.
					</p>
				</section>
			</div>

			<div className="separator"></div>

			<div className="container">
				<section className="team">
					<h2>Our Team</h2>
					<img alt="a volunteer team of HelpCity" src={pic3}></img>
					<p>
						HelpCity is a community of passionate individuals with the audacity
						to believe we can make a difference in our small corner of the
						world. That’s why we come together every Saturday morning to roll up
						our sleeves and assist a low-income single mother or widow with
						small, laborious projects around the home.
					</p>
					<p>Afterwards, we go out to lunch to celebrate!</p>
				</section>
			</div>

			<div className="separator"></div>
			
			<div className="container">
				<section className="team">
					<h2>HelpCity’s Partners & Programs</h2>
					<img alt="HelpCity's Partner Kairos" src={pic4}></img>
					<p>
						HelpCity is proud to partner with Kairos, Seattle’s #1 trusted coach
						for couples seeking relationship repair and individuals wanting to
						develop emotionally intelligent skills for life and healthier
						relationships!
					</p>
				</section>
			</div>
		</div>
	);
};

export default About;
