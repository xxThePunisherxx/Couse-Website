import React from "react";
import style from "./Hero.module.css";
const Hero = () => {
	return (
		<div className={style.Home_Container}>
			<div className={style.Hero_Container}>
				<div className={style.Hero}>
					<h1>Lorem ipsum dolor sit amet consectetur.</h1>
					<h2>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem deserunt consequatur asperiores possimus ullam aperiam ab,
						laudantium eveniet. Est nemo nostrum aspernatur cumque enim? Debitis saepe vero cum accusamus?
					</h2>
					<button>Learn More</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
