import React from "react";

import style from "./CourseCategoryList.module.css";
import { MdModeEditOutline, MdDeleteSweep } from "react-icons/md";
import axios from "axios";
// import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import useFetchAuth from "../../Utils/Hooks/fetchAuth";

const CourseCategoryList = () => {
	const dummyArr = [0, 1, 2, 3, 4, 5]; // just for adding skeleton.
	const { data: trainingData, ispending } = useFetchAuth("http://localhost:8080/api/category");
	const handleDelete = async (id, e) => {
		try {
			let response = await axios.delete("http://localhost:8080/api/category/delete/" + id);
			console.log(response.data);
			if (response.status === 201) {
				setTimeout(() => {
					window.location.reload();
				}, 500);
			}
		} catch (error) {
			console.log("Error" + error.message);
		}
	};
	return (
		<div className={style.Categories_Wrapper}>
			<h1>
				Course <span className={style.Heading_Highlight}>Categories</span>
			</h1>
			{ispending && (
				<div className={style.TrainingGrid}>
					{dummyArr.map(() => (
						<div key={uuid()} className={style.Training}>
							<div className={style.Skel}>
								<div className={style.H1Div}></div>
								{/* <div className={style.H1Div}></div> */}
							</div>
						</div>
					))}
				</div>
			)}
			{!ispending && (
				<>
					<div className={style.Category_Table_Header}>
						<h1>Course Category</h1>
					</div>
					<div className={style.Categories_Grid}>
						{trainingData.categorys.map((category) => (
							<div key={uuid()} className={style.Categories_Card}>
								<h1>{category.course_type}</h1>
								<div className={style.Action_Buttons}>
									<Link to={`/admin/updateCourseCategory/${category._id}`}>
										<button className={style.Edit_Btn}>
											<MdModeEditOutline />
										</button>
									</Link>
									<button className={style.Delete_Btn} onClick={(e) => handleDelete(category._id, e)}>
										<MdDeleteSweep />
									</button>
								</div>
							</div>
						))}
					</div>
				</>
			)}
			{/* {!ispending && (
				<Link to={"/admin/addCategory"}>
					<button className={style.new}>Add Course Category</button>
				</Link>
			)} */}
		</div>
	);
};

export default CourseCategoryList;
