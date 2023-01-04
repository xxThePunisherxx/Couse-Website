import React from "react";
import style from "./Courses.module.css";
import { TrainingData } from "../../Data/Trainings";

const Courses = () => {
	return (
		<div className={style.TrainingContainer}>
			<h1 className={style.MainHeading}>
				Our <span className={style.HeadingHighlight}>trainings</span>
			</h1>
			<div className={style.TrainingGrid}>
				{TrainingData.map((item) => (
					<div className={style.Training} key={item.key}>
						<img src={item.imgURL} alt={item.Title} />
						<h1>{item.Title}</h1>
						<h2>Duration: {item.Duration}</h2>
						<button>View Course</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Courses;
