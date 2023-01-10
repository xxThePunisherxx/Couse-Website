import React from "react";
import { CategoryList } from "../../Data/Categories";
import style from "./CourseCategoryList.module.css";
import { MdModeEditOutline, MdDeleteSweep } from "react-icons/md";

const CourseCategoryList = () => {
	return (
		<div className={style.Categories_Wrapper}>
			<h1>Course Categories</h1>
			<div className={style.Categories_Grid}>
				{CategoryList.map((category) => (
					<div key={category.key} className={style.Categories_Card}>
						<h1>{category.value}</h1>
						<button className={style.Edit_Btn}>
							<MdModeEditOutline />
						</button>
						<button className={style.Delete_Btn}>
							<MdDeleteSweep />
						</button>
					</div>
				))}
			</div>
			<button className={style.new}>Add Course Category</button>
		</div>
	);
};

export default CourseCategoryList;
