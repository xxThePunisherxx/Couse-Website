import React from "react";
import style from "./AdminList.module.css";
import { MdModeEditOutline, MdDeleteSweep } from "react-icons/md";
import useFetchAuth from "../../Utils/Hooks/fetchAuth";

import uuid from "react-uuid";

const AdminList = () => {
	const dummyArr = [0, 1, 2]; // just for adding skeleton.

	const { data: trainingData, ispending } = useFetchAuth("http://localhost:8080/api/user/admin/users");
	console.log(trainingData.users);
	return (
		<div className={style.AdminList}>
			<h1>
				Admin <span className={style.HeadingHighlight}>List</span>
			</h1>
			{ispending && (
				<div className={style.TrainingGrid}>
					{dummyArr.map(() => (
						<div key={uuid()} className={style.Training}>
							<div className={style.Skel}>
								<div className={style.H1Div}></div>
								<div className={style.H1Div}></div>
								<div className={style.H1Div}></div>
								<div className={style.H1Div}></div>
							</div>
						</div>
					))}
				</div>
			)}
			{!ispending && (
				<div className={style.allAdminWrapper}>
					<div className={style.allAdminGrid}>
						{trainingData.users.map((Admin) => (
							<div key={uuid()} className={style.admin_Table}>
								<h1>{Admin.name}</h1>
								<h1>{Admin.role}</h1>
								<h1>{Admin.email}</h1>

								<button className={style.Edit_Btn}>
									<MdModeEditOutline />
								</button>
								<button className={style.Delete_Btn}>
									<MdDeleteSweep />
								</button>
							</div>
						))}
						{!ispending && <button className={style.new}>Add admin</button>}
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminList;
