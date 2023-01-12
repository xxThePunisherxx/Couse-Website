import React from "react";
import style from "./Courses.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Courses = () => {
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

	return (
		<div className={style.TrainingContainer}>
			<h1 className={style.MainHeading}>
				Our <span className={style.HeadingHighlight}>trainings</span>
			</h1>
			<div className={style.TrainingGrid}>
				{trainingData.map((item) => (
					<Link to={`/course-view/${item._id}`} key={item._id}>
						<div className={style.Training} key={item._id}>
							<img src={item.image} alt={item.Title} />
							<h1>{item.title}</h1>
							<h2>Duration: {item.duration}</h2>
							<button>View Course</button>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Courses;
