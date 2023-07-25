import "./Footer.css";
const Footer = () => {
	return (
		<footer className="footer">
			<p>HelpCity | Seattle, WA (425) 202 - 5280</p>
			<p>© HelpCity 2023 | Privacy Policy | Terms of Service</p>
			<div className="social-media">
				<a
					href="https://www.facebook.com/GoHelpCity/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa-brands fa-square-facebook fa-2xl"></i>
				</a>
				<a href="mailto:hello@gohelpcity.org">
					<i className="fa-solid fa-envelope fa-2xl"></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
