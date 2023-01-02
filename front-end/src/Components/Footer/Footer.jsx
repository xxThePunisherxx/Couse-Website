import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<div className={style.Footer_Container}>
				<div className={style.Logo_Container}>
					<img src="Img/Logo.png" alt="Company Logo" />
					<h2>Email: someone@something.com</h2>
					<h2>Phone: 01-1234567890, 01-0987654321</h2>
				</div>
				<div className={style.Link_Containers}>
					<h1>Quick Links</h1>
					<ul>
						<li>
							<Link to={"/"}>Home</Link>
						</li>
						<li>
							<Link to={"/courses"}>Courses</Link>
						</li>
						<li>
							<Link to={"/gallery"}>Galary</Link>
						</li>
						<li>
							<Link to={"/contact"}>Contact</Link>
						</li>
						<li>
							<Link to={"/team"}>Our Team</Link>
						</li>
					</ul>
				</div>
				<div className={style.Info_Container}>
					<div className={style.Location}>
						<h1>Location</h1>
						<h2> MidTown Armory 123 Grove St</h2>
					</div>
					<div className={style.Time}>
						<h1>Opeaning Hours</h1>
						<h2>Mon-Fri: 10AM- 5PM</h2>
						<h2>Sat-Sun: Appointment Only</h2>
					</div>
				</div>
				<div className={style.Social_Containers}>
					<h1>Connect with us</h1>
					<div className={style.Social_links}>
						<a href="https://www.facebook.com/" target="blank">
							<img src="Icons/facebook.png" alt="Social icons" />
						</a>
						<a href="https://www.linkedin.com/" target="blank">
							<img src="Icons/linkedin.png" alt="Social icons" />
						</a>
						<a href="https://www.instagram.com/" target="blank">
							<img src="Icons/instagram.png" alt="Social icons" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
