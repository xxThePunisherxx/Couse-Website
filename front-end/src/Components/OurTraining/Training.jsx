import React from "react";
import style from "./Training.module.css";
import { Link } from "react-router-dom";
// import { TrainingData } from "../../Data/Trainings";
import { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
const Training = () => {
	const [trainingData, setTrainingData] = useState([{}]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await axios.get("http://localhost:8080/api/training");
				setTrainingData(response.data);
				console.log(response.data);
			} catch (error) {
				if (error.response) {
					console.log(error.response.status);
					console.log(error.response.headers);
				} else {
					console.log(`Error: ${error.message}`);
				}
			}
		};
		fetchData();
	}, []);
	let SlicedTraining = trainingData.slice(0, 12);
	console.log(trainingData);
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
