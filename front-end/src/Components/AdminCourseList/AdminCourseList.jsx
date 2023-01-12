import React from "react";
import style from "./AdminCourseList.module.css";
import { TrainingData } from "../../Data/Trainings";

import { MdModeEditOutline, MdDeleteSweep } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminCourseList = () => {
	const [trainingData, setTrainingData] = useState([{}]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await axios.get("http://localhost:8080/api/training");
				setTrainingData(response.data);
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
		<div>
			<div className={style.allCourseWrapper}>
				<h1>Active Courses</h1>
				<div className={style.allCourseGrid}>
					{trainingData.slice(0, 5).map((Training) => (
						<div key={Training.key} className={style.AdminCourseCard}>
							<div className={style.AdminCourseCard_Info}>
								<img src={Training.image} alt={Training.title}></img>
								<h1>{Training.title}</h1>
								<h2>{Training.duration}</h2>
							</div>
							<div className={style.AdminCourseCard_Btn}>
								<button className={style.Edit_Btn}>
									<MdModeEditOutline />
								</button>
								<button className={style.Delete_Btn}>
									<MdDeleteSweep />
								</button>
							</div>
						</div>
					))}
				</div>
				<button className={style.new}>View All</button>
			</div>
		</div>
	);
};

export default AdminCourseList;
