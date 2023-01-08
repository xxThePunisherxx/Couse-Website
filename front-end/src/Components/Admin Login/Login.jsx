import React from "react";

import style from "./Login.module.css";

const Login = () => {
	const handlesubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		let enterdData = Object.fromEntries(data.entries());
		console.log(enterdData);
	};
	return (
		<div className={style.AdminLoginWrapper}>
			<div className={style.AdminLogin}>
				<div className={style.Heading}>
					<h1>
						Admin <span className={style.HeadingHighlight}>Login</span>
					</h1>
					<h2>Enter your credentials to sign in to your account </h2>
				</div>

				<form onSubmit={handlesubmit} autoComplete="off" className={style.FormWrappper}>
					<input name="User_Name" type="text" placeholder="User Name" required></input>
					<input name="Password" type="password" placeholder="Password" required></input>
					<h1>Having trouble in signing in??</h1>
					<button>Sign in</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
