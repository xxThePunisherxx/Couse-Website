import React from "react";
import style from "./Training.module.css";
import { Link } from "react-router-dom";
import { TrainingData } from "../../Data/Trainings";

const Training = () => {
	let SlicedTraining = TrainingData.slice(0, 12);
	return (
		<div className={style.TrainingContainer}>
			<h1 className={style.MainHeading}>
				Our <span className={style.HeadingHighlight}>trainings</span>
			</h1>
			<div className={style.TrainingGrid}>
				{SlicedTraining.map((item) => (
					<Link to={`course-view/${item.key}`} key={item.key}>
						<div className={style.Training}>
							<img src={item.imgURL} alt={item.Title} />
							<h1>{item.Title}</h1>
							<h2>Duration: {item.Duration}</h2>
							{/* <button>View Course</button> */}
						</div>
					</Link>
				))}
			</div>

			<Link to={"/courses"}>
				<button>View all courses</button>
			</Link>
		</div>
	);
};

export default Training;
