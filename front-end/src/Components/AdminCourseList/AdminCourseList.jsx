import React from "react";
import style from "./AdminCourseList.module.css";
import { TrainingData } from "../../Data/Trainings";

import { MdModeEditOutline, MdDeleteSweep } from "react-icons/md";

const AdminCourseList = () => {
	return (
		<div>
			<div className={style.allCourseWrapper}>
				<h1>Active Courses</h1>
				<div className={style.allCourseGrid}>
					{TrainingData.slice(0, 5).map((Training) => (
						<div key={Training.key} className={style.AdminCourseCard}>
							<div className={style.AdminCourseCard_Info}>
								<img src={Training.imgURL} alt={Training.Title}></img>
								<h1>{Training.Title}</h1>
								<h2>{Training.Duration}</h2>
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
