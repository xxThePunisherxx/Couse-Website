import React from "react";
import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<header className={style.header}>
				<div className={style.Navigation_Container}>
					<div className={style.Links}>
						<a href="/" className={style.logo}>
							<div className={style.headerrlogo}></div>
						</a>
						<input type="checkbox" id={style.navCheck}></input>
						<label htmlFor={style.navCheck} className={style.navToggler}>
							<span></span>
						</label>
						<nav className={style.nav}>
							<ul>
								<li>
									<NavLink
										to={"/"}
										className={({ isActive }) => {
											return "Link_Text_" + (isActive ? "Active" : "Unactive");
											// css properties are in App.css
										}}
									>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/courses"}
										className={({ isActive }) => {
											return "Link_Text_" + (isActive ? "Active" : "Unactive");
										}}
									>
										Courses
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/team"}
										className={({ isActive }) => {
											return "Link_Text_" + (isActive ? "Active" : "Unactive");
										}}
									>
										Our Team
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/aboutUS"}
										className={({ isActive }) => {
											return "Link_Text_" + (isActive ? "Active" : "Unactive");
										}}
									>
										About Us
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/contact"}
										className={({ isActive }) => {
											return "Link_Text_" + (isActive ? "Active" : "Unactive");
										}}
									>
										Contact
									</NavLink>
								</li>

								<li>
									<NavLink
										to={"/gallery"}
										className={({ isActive }) => {
											return "Link_Text_" + (isActive ? "Active" : "Unactive");
										}}
									>
										Gallery
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/verify"}
										className={({ isActive }) => {
											return "Link_Text_" + (isActive ? "Active" : "Unactive");
										}}
									>
										Verify
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/vacancy"}
										className={({ isActive }) => {
											return "Link_Text_" + (isActive ? "Active" : "Unactive");
										}}
									>
										Vacancy
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/services"}
										className={({ isActive }) => {
											return "Link_Text_" + (isActive ? "Active" : "Unactive");
										}}
									>
										Our Services
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navigation;
