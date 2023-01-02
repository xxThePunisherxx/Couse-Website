import React from "react";
import style from "./Training.module.css";

const Training = () => {
	const Trainings = [
		{
			key: 1,
			Title: "AWS Solution Architect Training",
			rating: 3.9,
			Duration: "70 Hrs",
			imgURL: "https://broadwayinfosys.com/uploads/courses/21201672286463.png",
		},
		{
			key: 2,
			Title: "Graphic Design Training",
			rating: 3.8,
			Duration: "2.5 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/64071664434685.png",
		},
		{
			key: 3,
			Title: "Video Editing Training",
			rating: 2.9,
			Duration: "1 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/50141664437013.png",
		},
		{
			key: 4,
			Title: "Motion Graphics Training",
			rating: 3.5,
			Duration: "3 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/28751664437694.png",
		},
		{
			key: 5,
			Title: "UI UX Design Training",
			rating: 4.8,
			Duration: "2 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/16131664434907.png",
		},
		{
			key: 6,
			Title: "ASP.NET Core Training",
			rating: 4.1,
			Duration: "2.5 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/94921664435043.png",
		},
		{
			key: 7,
			Title: "Web Design Training",
			rating: 4.4,
			Duration: "2 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/96701664435119.png",
		},
		{
			key: 8,
			Title: "MERN Stack Development Training",
			rating: 5,
			Duration: "3 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/52941664435239.png",
		},
		{
			key: 9,
			Title: "Python & Django Training",
			rating: 4.3,
			Duration: "2.5 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/77811664435321.png",
		},
		{
			key: 10,
			Title: "Java Training Package",
			rating: 3,
			Duration: "3 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/87711664435371.png",
		},
		{
			key: 11,
			Title: "Java Training Package",
			rating: 3,
			Duration: "3 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/87711664435371.png",
		},
		{
			key: 12,
			Title: "Java Training Package",
			rating: 3,
			Duration: "3 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/87711664435371.png",
		},
		{
			key: 13,
			Title: "Java Training Package",
			rating: 3,
			Duration: "3 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/87711664435371.png",
		},
		{
			key: 14,
			Title: "MERN Stack Development Training",
			rating: 5,
			Duration: "3 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/52941664435239.png",
		},
		{
			key: 15,
			Title: "MERN Stack Development Training",
			rating: 5,
			Duration: "3 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/52941664435239.png",
		},
		{
			key: 16,
			Title: "MERN Stack Development Training",
			rating: 5,
			Duration: "3 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/52941664435239.png",
		},
		{
			key: 17,
			Title: "MERN Stack Development Training",
			rating: 5,
			Duration: "3 Months",
			imgURL: "https://broadwayinfosys.com/uploads/courses/52941664435239.png",
		},
	];
	return (
		<div className={style.TrainingContainer}>
			<h1 className={style.MainHeading}>
				Our <span className={style.HeadingHighlight}>trainings</span>
			</h1>
			<div className={style.TrainingGrid}>
				{Trainings.map((item) => (
					<div className={style.Training} key={item.key}>
						<img src={item.imgURL} alt={item.Title} />
						<h1>{item.Title}</h1>
						<h2>Duration: {item.Duration}</h2>
						<button>View Course</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Training;
