import React from "react";
import style from "./Hero.module.css";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { ImageList } from "../../Data/Carousel";

const Hero = () => {
	return (
		// <div className={style.Home_Container}>
		<div className={style.Hero_Container}>
			<div className={style.Hero}>
				<div className={style.left}>
					<h1>Improve your skills faster</h1>
					<h2>Speed up the skill aquisition procress by finding courses that matches your niche.</h2>
					<Link to={"/enroll"}>
						<button>Enroll now</button>
					</Link>
				</div>
				<div className={style.mid}>
					<Carousel images={ImageList} EnableautoPlay={true} ShowItemFor={8000} />
				</div>
				{/* <div className={style.right}>
						<div className={style.top}>
							<img src="Icons/instagram.png" alt="icon" />
							<h1>
								70<sup>+</sup>
							</h1>
							<h2>Professional and Qualified teachers</h2>
						</div>
						<div className={style.bottom}>
							<img src="Icons/instagram.png" alt="icon" />
							<h1>
								20<sup>+</sup>
							</h1>
							<h2>Courses and related materials</h2>
						</div>
					</div> */}
			</div>
		</div>
		// </div>
	);
};

export default Hero;
