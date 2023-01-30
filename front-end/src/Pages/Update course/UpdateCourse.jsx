import React from "react";
import { useRef, useEffect, useState } from "react";
import style from "./UpdateCourse.module.css";
import { useParams } from "react-router-dom";

import axios from "axios";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

const RemoveCourse = () => {
	const navigate = useNavigate();
	const UpdateRef = useRef();
	const { courseID } = useParams();
	const [IndividualtrainingData, setIndividualTrainingData] = useState([{}]); //  data feilds of individual course
	const [IndividualtrainingDataCat, setIndividualTrainingCat] = useState(""); // just contains course category of fetched course.
	const [trainingCategory, setTrainingCategory] = useState([{}]); // list of all training categories.

	console.log(IndividualtrainingDataCat);
	useEffect(() => {
		const fetchData = async () => {
			// get request to get pre-update value of the course.
			try {
				let response = await axios.get("http://localhost:8080/api/training/" + courseID);
				setIndividualTrainingData(response.data.trainings);
				setIndividualTrainingCat(response.data.trainings.category);
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

	useEffect(() => {
		//get list of all training categories from  the db
		const fetchData = async () => {
			try {
				let response = await axios.get("http://localhost:8080/api/category");
				setTrainingCategory(response.data.categorys);
				// console.log(response.data.categorys);
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

	const handlesubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		let enterdData = Object.fromEntries(data.entries());
		console.log(enterdData);
		const postData = {
			title: enterdData.course_Name,
			description: enterdData.course_Description,
			duration: enterdData.course_Duration,
			priority: enterdData.course_Priority,
			image: enterdData.course_Image,
			rating: enterdData.course_Rating,
			category: enterdData.dropdown,
			career: enterdData.course_careerPath,
		};
		try {
			const response = await axios.put(`http://localhost:8080/api/training/update/${courseID}`, postData);
			// if (response.status === 201) {
			// 	setTimeout(() => {
			// 		navigate("/admin/dashboard");
			// 	}, 1000);
			// }
			console.log(response);
			setTimeout(() => {
				navigate("/admin/dashboard");
			}, 1000);
		} catch (error) {}
	};
	useEffect(() => {
		UpdateRef.current.focus();
	}, []);
	return (
		<div className={style.UpdateCourseWrapper}>
			<div className={style.UpdateCourse}>
				<div className={style.heading}>
					<h1>
						Update <span className={style.Headinghighlight}>Course</span>
					</h1>
				</div>
				<form onSubmit={handlesubmit} autoComplete="off" className={style.FormWrappper}>
					<h1>Course Name :</h1>
					<input
						name="course_Name"
						defaultValue={IndividualtrainingData.title}
						type="text"
						placeholder="Course Name"
						required
						ref={UpdateRef}
					></input>
					<h1>Course Duration:</h1>
					<input name="course_Duration" defaultValue={IndividualtrainingData.duration} type="text" placeholder="Course Duration" required></input>
					<h1>Course Description:</h1>
					<textarea
						name="course_Description"
						defaultValue={IndividualtrainingData.description}
						type="text"
						placeholder="Course Description"
						cols={30}
						rows={5}
						required
					></textarea>
					<h1>Course Image:</h1>
					<input name="course_Image" defaultValue={IndividualtrainingData.image} type="text" placeholder="Course Image URL" required></input>
					<h1>Course Priority:</h1>
					<input name="course_Priority" defaultValue={IndividualtrainingData.priority} type="number" placeholder="Course Priority" required></input>
					<h1>Rating</h1>
					<input name="course_Rating" defaultValue={IndividualtrainingData.rating} type="number" placeholder="Course Rating" required></input>
					<h1>Career Path</h1>
					<input name="course_careerPath" defaultValue={IndividualtrainingData.career} type="text" placeholder="Career path" required></input>
					<h1>Course Category:</h1>
					<select name="dropdown">
						<option value={IndividualtrainingDataCat._id}>{IndividualtrainingDataCat.course_type}</option>

						{trainingCategory.map((Category) => (
							<option key={uuid()} value={Category._id}>
								{Category.course_type}
							</option>
						))}
					</select>
					<button className={style.Spantwo}>Update</button>
				</form>
			</div>
		</div>
	);
};

export default RemoveCourse;
