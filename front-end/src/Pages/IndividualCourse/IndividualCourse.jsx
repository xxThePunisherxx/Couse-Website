import React from "react";
import style from "./IndividualCourse.module.css";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaClock, FaUserTie } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const IndividualCourse = () => {
	const { courseID } = useParams();
	const [IndividualtrainingData, setIndividualTrainingData] = useState([{}]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await axios.get("http://localhost:8080/api/training/" + courseID);
				setIndividualTrainingData(response.data.trainings);
				// console.log(response.data.trainings);
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
				<div className={style.Training_contents}>
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

						<button>
							Enroll
							<div className={style.arrow_wrapper}>
								<div className={style.arrow}></div>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div className={style.Training_DescriptionWrapper}>
				<div className={style.Training_Description}>
					<h1>{IndividualtrainingData.title}</h1>
					{/* array.map for all paragraph form backend */}
					<p>{IndividualtrainingData.description}</p>
				</div>
				<div className={style.course_overview}>
					<div className={style.BannerHeading}>
						<h1>
							Course Outline:&nbsp;<span className={style.course_overview_title_span}>{IndividualtrainingData.title}</span>
						</h1>
						<div className={style.arrow}>
							<button>
								<AiFillCaretDown />
							</button>
						</div>
					</div>

					<div>
						<div className={style.course_overview_contents}>
							<h2>Module 1: Overview of python [6 HOURS]</h2>
							<div className={style.bulletPoints}>
								<ul>
									<li>
										<p>Introductin to Python</p>
									</li>
									<li>
										<p>History of python</p>
									</li>
									<li>
										<p>Features of python</p>
									</li>
									<li>
										<p>Installation of python</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
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
