import React from "react";
import style from "./AdminCourseList.module.css";
import { MdModeEditOutline, MdDeleteSweep, MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import useFetch from "../../Utils/Hooks/fetch";

const AdminCourseList = () => {
	const [showSuccecss, setshowSuccecss] = useState(false);
	const [ShowconfirmDelete, setShowconfirmDelete] = useState(false);
	const [ToDelete, setToDelete] = useState(false);

	const { data: trainingResponse } = useFetch("http://localhost:8080/api/training");

	const trainingData = trainingResponse.training;
	console.log(trainingData);

	const handleDeletePopup = (id) => {
		setShowconfirmDelete(true);
		setToDelete(id);
	};
	const handleCancel = () => {
		setShowconfirmDelete(false);
	};
	const handleConfirm = async () => {
		let response = await axios.delete("http://localhost:8080/api/training/delete/" + ToDelete);
		try {
			if (response.status === 201) {
				setTimeout(() => {
					setshowSuccecss(true);
					setTimeout(() => {
						setshowSuccecss(false);
					}, 1000);
					window.location.reload();
				}, 2000);
			}
		} catch (error) {
			console.log("Error" + error.message);
		}
	};

	return (
		<div>
			<div className={style.allCourseWrapper}>
				<h1>Active Courses</h1>
				<div className={style.allCourseGrid}>
					{trainingData.slice(0, 5).map((Training) => (
						<div key={uuid()} className={style.AdminCourseCard}>
							<div className={style.AdminCourseCard_Info}>
								<img src={Training.image} alt={Training.title}></img>
								<h1>{Training.title}</h1>
								<h2>{Training.duration}</h2>
							</div>
							<div className={style.AdminCourseCard_Btn}>
								<Link to={`/admin/updateCourse/${Training._id}`}>
									<button className={style.Edit_Btn}>
										<MdModeEditOutline />
									</button>
								</Link>

								<button className={style.Delete_Btn} onClick={() => handleDeletePopup(Training._id)}>
									<MdDeleteSweep />
								</button>
							</div>
						</div>
					))}
				</div>
				<button className={style.new}>
					<Link to={"/admin/allCourse"}> View All</Link>
				</button>
			</div>
			{ShowconfirmDelete && (
				<div className={style.popup}>
					<div className={style.close_btn}>
						<h1>
							<button onClick={handleCancel}>
								<MdOutlineClose />
							</button>
						</h1>
					</div>
					<div className={style.contnets}>
						<h1>Are you sure you want to proceed?</h1>
						<h2> This action cannot be reversed.</h2>
					</div>
					<div className={style.button_grid}>
						<button className={style.delete} onClick={handleConfirm}>
							Delete
						</button>
						<button className={style.cancel} onClick={handleCancel}>
							Cancel
						</button>
					</div>
				</div>
			)}
			{showSuccecss && (
				<div className={style.successBoard}>
					<h1>Deleted Succesfully</h1>
				</div>
			)}
		</div>
	);
};

export default AdminCourseList;
