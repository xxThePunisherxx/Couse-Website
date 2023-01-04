import React from "react";
import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { Links } from "../../Data/Navlink";

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
								{Links.map((Link) => (
									<li key={Link.Key}>
										<NavLink
											to={Link.Linkto}
											className={({ isActive }) => {
												return "Link_Text_" + (isActive ? "Active" : "Unactive");
												// css properties are in App.css
											}}
										>
											{Link.LinkName}
										</NavLink>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navigation;
