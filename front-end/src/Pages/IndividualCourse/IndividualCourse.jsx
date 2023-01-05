import React from "react";
import style from "./IndividualCourse.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const IndividualCourse = () => {
	const { courseID } = useParams();
	const navigate = useNavigate();
	function gotoHomepage() {
		navigate("/");
	}
	return (
		<div className={style.IndividualPageWrapper}>
			<h1>IndividualCourse for course {courseID}</h1>
			<button onClick={gotoHomepage}> Go to Homepage</button>
		</div>
	);
};

export default IndividualCourse;
