import React from "react";
import style from "./Training.module.css";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import useFetch from "../../Utils/Hooks/fetch";

const Training = () => {
	const { data: trainingData } = useFetch("http://localhost:8080/api/training");

	let TrrainingDataArr = trainingData?.training;
	let SlicedTraining = TrrainingDataArr.slice(0, 12);
	return (
		<div className={style.TrainingContainer}>
			<h1 className={style.MainHeading}>
				Our <span className={style.HeadingHighlight}>trainings</span>
			</h1>
			<div className={style.TrainingGrid}>
				{SlicedTraining.map((item) => (
					<Link to={`course-view/${item._id}`} key={uuid()}>
						<div className={style.Training}>
							<img src={item.image} alt={item.Title} />
							<h1>{item.title}</h1>
							<h2>Duration: {item.duration}</h2>
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
