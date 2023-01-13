import React from "react";
import style from "./AddCourse.module.css";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

const AddCourse = () => {
	const addRef = useRef();
	const navigate = useNavigate();
	const [trainingCategory, setTrainingCategory] = useState([{}]);

	useEffect(() => {
		//get list of all training categories from  the db
		const fetchData = async () => {
			try {
				let response = await axios.get("http://localhost:8080/api/category");
				setTrainingCategory(response.data);
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

	console.log(trainingCategory);
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
			const response = await axios.post("http://localhost:8080/api/training/add", postData);
			if (response.status === 201) {
				setTimeout(() => {
					navigate("/admin/dashboard");
				}, 1000);
			}
		} catch (error) {}
	};
	useEffect(() => {
		addRef.current.focus();
	}, []);
	return (
		<div className={style.AddCourseWrapper}>
			<div className={style.AddCourse}>
				<div className={style.heading}>
					<h1>
						Add <span className={style.Headinghighlight}> new Course</span>
					</h1>
				</div>
				<form onSubmit={handlesubmit} autoComplete="off" className={style.FormWrappper}>
					<h1>Course Name:</h1>
					<input name="course_Name" type="text" placeholder="Course Name" required ref={addRef}></input>
					<h1>Course Duration:</h1>
					<input name="course_Duration" type="text" placeholder="Course Duration" required></input>
					<h1>Course Description:</h1>
					<textarea name="course_Description" type="text" placeholder="Course Description" cols={30} rows={5} required></textarea>
					<h1>Course Image:</h1>
					<input name="course_Image" type="text" placeholder="Course Image URL" required></input>
					<h1>Course Priority:</h1>
					<input name="course_Priority" type="number" placeholder="Course Priority" required></input>
					<h1>Rating</h1>
					<input name="course_Rating" type="number" placeholder="Course Rating" required></input>
					<h1>Career Path</h1>
					<input name="course_careerPath" type="text" placeholder="Career path" required></input>
					<h1>Course Category:</h1>
					<select name="dropdown">
						<option>Select Category</option>
						{trainingCategory.map((Category) => (
							<option key={uuid()} value={Category._id}>
								{Category.course_type}
							</option>
						))}
					</select>
					<button className={style.Spantwo}>Create</button>
				</form>
			</div>
		</div>
	);
};

export default AddCourse;
