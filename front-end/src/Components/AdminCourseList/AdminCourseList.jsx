import React from "react";
import style from "./AdminCourseList.module.css";
import { MdModeEditOutline, MdDeleteSweep } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

const AdminCourseList = () => {
	const [trainingData, setTrainingData] = useState([{}]);
	const [showAreYouSureVisible, setAreYouSureVisible] = useState(false);
	const [delID, setdelID] = useState(0);
	const [delTitle, setdelTitle] = useState("");
	const [ConformFormInput, setConformFormInput] = useState("");
	const [ConformFormButtonDisabled, setConformFormButtonDisabled] = useState(true);

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
	useEffect(() => {
		if (delTitle.length !== 0 && ConformFormInput === delTitle) {
			setConformFormButtonDisabled(false);
		} else {
			setConformFormButtonDisabled(true);
		}
	}, [ConformFormInput, delTitle]);

	const handleDeleteConfirmation = (id, title) => {
		setdelID(id);
		setAreYouSureVisible(true);
		setdelTitle(title);
	};
	const handleConfirmedDelete = async (id, e) => {
		try {
			let response = await axios.delete("http://localhost:8080/api/training/delete/" + delID);
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
	// console.log(ConformFormInput);
	return (
		<>
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
								<button className={style.Delete_Btn} onClick={(e) => handleDeleteConfirmation(Training._id, Training.title)}>
									<MdDeleteSweep />
								</button>
							</div>
						</div>
					))}
				</div>
				<button className={style.new}>View All</button>
			</div>
			{showAreYouSureVisible && (
				<div className={style.areYouSureAboutThat}>
					<div className={style.confirmationItems}>
						<h1>This is a dangerous action. Are you sure about this?</h1>
						<form className={style.confirmationForm}>
							<h1>
								Please type "
								<span className={style.inputHightlight}>
									<h1>{delTitle}</h1>
								</span>
								" below to continue
							</h1>
							<input
								type="text"
								placeholder=""
								value={ConformFormInput}
								onChange={(e) => {
									setConformFormInput(e.target.value);
								}}
							/>
							<button disabled={ConformFormButtonDisabled} onClick={handleConfirmedDelete}>
								Delete
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default AdminCourseList;
