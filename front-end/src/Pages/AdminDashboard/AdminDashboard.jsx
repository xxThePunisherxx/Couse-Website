import React from "react";
import style from "./AdminDashboard.module.css";

const AdminDashboard = () => {
	return (
		<div className={style.AdminDashboardWrapper}>
			<div className={style.allCourseWrapper}>
				<h1>All Courses</h1>
				<div className={style.allCourseGrid}></div>
			</div>
			<div className={style.allAdminWrapper}>
				<h1>Admin list</h1>
				<div className={style.allAdminGrid}></div>
			</div>
		</div>
	);
};

export default AdminDashboard;
