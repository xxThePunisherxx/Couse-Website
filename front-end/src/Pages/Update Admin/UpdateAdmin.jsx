import React, { useRef } from "react";
import style from "./UpdateAdmin.module.css";
import { useParams } from "react-router-dom";
import useFetchAuth from "../../Utils/Hooks/fetchAuth";

const UpdateAdmin = () => {
	const { adminID } = useParams();
	const UpdateRef = useRef();

	const { data: UserData, ispending } = useFetchAuth(`http://localhost:8080/api/user/admin/user/${adminID}`);
	console.log(UserData);

	const handleSubmit = () => {};

	return (
		<div>
			<h1>
				Update <span className={style.Heading_Highlight}>details</span>
			</h1>
			{!ispending && (
				<form onSubmit={handleSubmit} autoComplete="off" className={style.Form_Wrapper}>
					<h1>User Name</h1>
					<input name="user_name" defaultValue={UserData.user.name} type="text" required ref={UpdateRef}></input>
					<h1>Email</h1>
					<input name="user_email" defaultValue={UserData.user.email} type="email"></input>
					<h1>Role</h1>
					<select name="role_dropDown">
						<option value={UserData.user.role}>{UserData.user.role}</option>
						{/* <option value="Admin">Admin</option> */}
						<option value="superAdmin">Super Admin</option>
					</select>
				</form>
			)}
		</div>
	);
};

export default UpdateAdmin;
