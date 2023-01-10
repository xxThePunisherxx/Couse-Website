import React from "react";
import { NavLink } from "react-router-dom";
import style from "./AdminSidebar.module.css";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineAppstoreAdd, AiFillHome } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io5";

const AdminSidebar = () => {
	return (
		<div className={style.AdminSidebarWrapper}>
			<div className={style.AdminSidebar}>
				<div className={style.Logo}>
					<h1>Logo image</h1>
				</div>
				<div className={style.DashboardLinks}>
					<NavLink
						className={({ isActive }) => {
							return "AdminDash-" + (isActive ? "Active" : "Inactive");
						}}
						to={"/admin/dashboard"}
					>
						<h1>
							<RxDashboard /> &nbsp;Dashboard
						</h1>
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return "AdminDash-" + (isActive ? "Active" : "Inactive");
						}}
						to={"/admin/addCourse"}
					>
						<h1>
							<AiOutlineAppstoreAdd /> &nbsp;Add Course
						</h1>
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return "AdminDash-" + (isActive ? "Active" : "Inactive");
						}}
						to={"/admin/addAdmin"}
					>
						<h1>
							<IoPersonAddOutline /> &nbsp;Add Admin
						</h1>
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return "AdminDash-" + (isActive ? "Active" : "Inactive");
						}}
						to={"/admin/addCategory"}
					>
						<h1>
							<AiOutlineAppstoreAdd /> &nbsp;Add Training Category
						</h1>
					</NavLink>

					<NavLink
						className={({ isActive }) => {
							return "AdminDash-" + (isActive ? "Active" : "Inactive");
						}}
						to={"/"}
					>
						<h1>
							<AiFillHome />
							&nbsp; HomePage
						</h1>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default AdminSidebar;
