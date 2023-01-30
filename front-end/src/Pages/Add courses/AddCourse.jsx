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
	const [showSuccess, setShowSuccess] = useState(false);

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
		const postData = {
			title: enterdData.course_Name,
			description: enterdData.course_Description,
			duration: enterdData.course_Duration,
			priority: enterdData.course_Priority,
			image: enterdData.course_Image,
			rating: enterdData.course_Rating,
			category: enterdData.dropdown,
			career: enterdData.course_careerPath,
			paragraphArray: descriptionParagraphList,
			courseSyllabusHeading: courseModuleHeadingList,
			// courseSyllabusListItems: courseModuleHeadingListItems,
		};
		try {
			// const response = await axios.post("http://localhost:8080/api/training/add", postData);
			// if (response.status === 201) {
			// 	setShowSuccess(true);

			// 	setTimeout(() => {
			// 		setTimeout(() => {
			// 			setShowSuccess(false);
			// 		}, 1000);
			// 		navigate("/admin/dashboard");
			// 	}, 2000);
			// }
			console.log(postData);
		} catch (error) {}
	};
	useEffect(() => {
		addRef.current.focus();
	}, []);

	const [descriptionParagraphList, setdescriptionParagraphList] = useState([{}]);
	const [courseModuleHeadingList, setCourseModuleHeadingList] = useState([{ CourseHeading: "", ListItem: {} }]);
	const [courseModuleHeadingListItems, setCourseModuleHeadingListItems] = useState([{}]);

	// handle methods for paragraph
	const handleParagraphAddition = () => {
		setdescriptionParagraphList([...descriptionParagraphList, { paragraphText: "" }]);
	};
	const handleParagraphRemove = (index) => {
		const list = [...descriptionParagraphList];
		list.splice(index, 1);
		setdescriptionParagraphList(list);
	};
	const handleParagraphChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...descriptionParagraphList];
		list[index][name] = value;
		setdescriptionParagraphList(list);
	};

	//handle methods for course syllabus Heading
	const handleSyllabusHeadingAddition = () => {
		setCourseModuleHeadingList([...courseModuleHeadingList, { CourseSyllabusHeading: "" }]);
	};
	const handleSyllabusHeadingRemove = (index) => {
		const list = [...courseModuleHeadingList];
		list.splice(index, 1);
		setCourseModuleHeadingList(list);
	};
	const handleSyllabusHeadingChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...courseModuleHeadingList];
		list[index][name] = value;
		setCourseModuleHeadingList(list);
	};

	// handle methods for course ListItems
	const handleSyllabusListItemAddition = () => {
		setCourseModuleHeadingListItems([...courseModuleHeadingListItems, { CourseSyllabusListItem: "" }]);
	};
	const handleSyllabusListItemRemove = (index) => {
		const list = [...courseModuleHeadingListItems];
		list.splice(index, 1);
		setCourseModuleHeadingListItems(list);
	};
	// const handleSyllabusListItemChange = (e, index) => {
	// 	const { name, value } = e.target;
	// 	const list = [...courseModuleHeadingListItems];
	// 	list[index][name] = value;
	// 	setCourseModuleHeadingListItems(list);
	// };

	return (
		<>
			<div className={style.AddCourseWrapper}>
				<div className={style.AddCourse}>
					<div className={style.heading}>
						<h1>
							Add <span className={style.Headinghighlight}> Course</span>
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

						{/*  */}
						<div className={style.dynamicParagraph}>
							<label htmlFor="paragraphText">Description Parargraph(s)</label>
							{descriptionParagraphList.map((singleParagraph, index) => (
								<div key={index} className={style.dynamicParagraph_paragraphs}>
									<div className={style.dynamicParagraph_firstDivi}>
										<textarea
											type="text"
											name="paragraphText"
											id="paragraphText"
											required
											value={singleParagraph.paragraphText}
											onChange={(e) => handleParagraphChange(e, index)}
											placeholder="paragraph text"
										/>
										{descriptionParagraphList.length - 1 === index && <button onClick={handleParagraphAddition}>Add new Paragraph</button>}
										{/* <button>Add service</button> */}
									</div>
									<div className={style.dynamicParagraph_secondDiv}>
										{descriptionParagraphList.length > 1 && (
											<button
												onClick={() => {
													handleParagraphRemove(index);
												}}
											>
												Remove paragraph
											</button>
										)}
									</div>
								</div>
							))}
						</div>

						{/*  for course syllabus */}
						<div className={style.dynamicModuleHeading}>
							<label htmlFor="CourseSyllabusHeading">Course Syllabus Heading(s)</label>
							{courseModuleHeadingList.map((singleHeading, index) => (
								<div key={index} className={style.dynamicModuleHeading_Headings}>
									<div className={style.dynamicModuleHeading_firstDiv}>
										<input
											type="text"
											name="CourseSyllabusHeading"
											id="CourseSyllabusHeading"
											required
											value={singleHeading.CourseSyllabusHeading}
											onChange={(e) => handleSyllabusHeadingChange(e, index)}
											placeholder="Module Heading"
										/>
										<label htmlFor="CourseModuleHeadingListItem">Course Module List Items</label>
										{courseModuleHeadingListItems.map((singleListItem, index) => (
											<div key={index} className="ListItems">
												<div className="firstDIv">
													<input
														type="text"
														name="CourseSyllabusListItem"
														id="CourseModuleHeadingListItem"
														value={singleListItem.CourseModuleHeadingListItem}
														onChange={(e) => handleSyllabusHeadingChange(e, index)}
														placeholder="Module List items"
													/>
													{courseModuleHeadingListItems.length - 1 === index && (
														<button onClick={handleSyllabusListItemAddition}>Add list Item</button>
													)}
												</div>
												<div className="secondDiv">
													{courseModuleHeadingListItems.length > 1 && <button onClick={handleSyllabusListItemRemove}>Remove List Item</button>}
												</div>
											</div>
										))}

										{courseModuleHeadingList.length - 1 === index && <button onClick={handleSyllabusHeadingAddition}>Add new Module Heading</button>}
									</div>
									<div className={style.dynamicModuleHeading_secondDiv}>
										{courseModuleHeadingList.length > 1 && (
											<button
												onClick={() => {
													handleSyllabusHeadingRemove(index);
												}}
											>
												Remove module Heading
											</button>
										)}
									</div>
								</div>
							))}
						</div>
					</form>
				</div>
			</div>
			{showSuccess && (
				<div className={style.successBoard}>
					<h1>Course Added succesfully</h1>
				</div>
			)}
		</>
	);
};

export default AddCourse;
