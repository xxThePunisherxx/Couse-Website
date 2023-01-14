import React from "react";
import style from "./IndividualCourse.module.css";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaClock, FaUserTie } from "react-icons/fa";

const IndividualCourse = () => {
	const { courseID } = useParams();
	const [IndividualtrainingData, setIndividualTrainingData] = useState([{}]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await axios.get("http://localhost:8080/api/training/" + courseID);
				setIndividualTrainingData(response.data);
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
	}, [courseID]);

	// const navigate = useNavigate();
	// function gotoHomepage() {
	// 	navigate("/");
	// }
	return (
		<div className={style.IndividualPageWrapper}>
			<div className={style.Training_header}>
				{/* //TODO: add banner image bg */}
				<h1>{IndividualtrainingData.title}</h1>
				<h2>Short description: still left to be implemented on backend</h2>
				<div className={style.Training_header_sub}>
					<h2>
						<FaClock /> &nbsp; Duration: {IndividualtrainingData.duration} months
					</h2>

					<h2>
						<FaUserTie /> &nbsp; Career: {IndividualtrainingData.career}
					</h2>
				</div>
				<div className={style.training_header_btn}>
					<button>Send Enquiry</button>
					<button className={style.second}>Enroll</button>
				</div>
			</div>
			<div className={style.Training_DescriptionWrapper}>
				<div className={style.Training_Description}>
					<h1>{IndividualtrainingData.description}</h1>
				</div>
				{/* <div className={style.course_overview}>
					<h1>Course syllabus</h1>
				</div> */}
			</div>
			{/* <div className={style.succesStory}>
				<h1>Card for students who get employeed after completing this training.</h1>
			</div> */}
			{/* <div className={style.upComming}>
				<h1>list of next intake starting and end data </h1>
			</div> */}
		</div>
	);
};

export default IndividualCourse;
