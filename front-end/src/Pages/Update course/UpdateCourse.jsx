import React from "react";
import { useRef, useEffect } from "react";
import style from "./UpdateCourse.module.css";
import { CategoryList } from "../../Data/Categories";

const RemoveCourse = () => {
	const UpdateRef = useRef();

	const handlesubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		let enterdData = Object.fromEntries(data.entries());
		console.log(enterdData);
	};
	useEffect(() => {
		UpdateRef.current.focus();
	}, []);
	return (
		<div className={style.UpdateCourseWrapper}>
			<div className={style.UpdateCourse}>
				<div className={style.heading}>
					<h1>
						Add <span className={style.Headinghighlight}> new Course</span>
					</h1>
				</div>
				<form onSubmit={handlesubmit} autoComplete="off" className={style.FormWrappper}>
					<h1>Course Name :</h1>
					<input name="course_Name" type="text" placeholder="Course Name" required ref={UpdateRef}></input>
					<h1>Course Duration:</h1>
					<input name="course_Duration" type="text" placeholder="Course Duration" required></input>
					<h1>Course Description:</h1>
					<textarea name="course_Description" type="text" placeholder="Course Description" cols={30} rows={5} required></textarea>
					<h1>Course Image:</h1>
					<input name="course_Image" type="text" placeholder="Course Image URL" required></input>
					<h1>Course Category:</h1>
					<select name="dropdown">
						<option>Select Category</option>
						{CategoryList.map((Category) => (
							<option key={Category.key}>{Category.value}</option>
						))}
					</select>
					<button className={style.Spantwo}>Create</button>
				</form>
			</div>
		</div>
	);
};

export default RemoveCourse;
