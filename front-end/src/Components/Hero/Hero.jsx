import React from "react";
import style from "./Hero.module.css";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { ImageList } from "../../Data/Carousel";
// import test from "./Img/hero.";
const Hero = () => {
	return (
		<div className={style.Home_Container}>
			<div className={style.Hero_Container}>
				<div className={style.Hero}>
					<div className={style.left}>
						<h1>Lorem ipsum dolor sit amet consectetur </h1>
						<h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus dolores fuga reprehenderit cumque similique laudantium ipsa
							incidunt adipisci repellendus.
						</h2>
						<Link to={"/enroll"}>
							<button>Enroll now</button>
						</Link>
					</div>
					<div className={style.mid}>
						{/* <img src="Img/hero.jpeg" alt="" /> */}
						<Carousel images={ImageList} />
					</div>
					<div className={style.right}>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
