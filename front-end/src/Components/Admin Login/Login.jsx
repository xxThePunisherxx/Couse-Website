import React from "react";
import { useRef, useEffect, useState, useContext } from "react";
import style from "./Login.module.css";
import AuthContext from "../../context/AuthProvider";
// import axios from "axios";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const usernameRef = useRef();
	const errorRef = useRef();
	const navigate = useNavigate();

	// const [user, setUser] = useState("");
	// const [pwd, setPwd] = useState("");
	// const [errorMesg, seterrorMesg] = useState("");

	// useEffect(() => {
	// 	usernameRef.current.focus();
	// }, []);
	// useEffect(() => {
	// 	seterrorMesg("");
	// }, [user, pwd]);

	//const handleSubmit = async (e) => {
	// e.preventDefault();
	// const data = new FormData(e.target);
	// let enterdData = Object.fromEntries(data.entries());
	// console.log(enterdData);
	//FIXME:
	//e.preventDefault();
	// try {
	// 	const response = await axios.post("http://localhost:8080//api/user/login", JSON.stringify({ email: user, password: pwd }), {
	// 		headers: { "Content-Type": "application/json" },
	// 		withCredentials: true,
	// 	});
	// 	setUser("");
	// 	setPwd("");
	// 	console.log(JSON.stringify(response?.data));
	// 	console.log(JSON.stringify(response));
	// 	const accessToken = response?.data?.accessToken;
	// 	const role = response?.data?.role;
	// } catch (err) {
	// 	if (!err?.response) {
	// 		seterrorMesg("No server response.");
	// 	} else {
	// 		seterrorMesg(err);
	// 	}
	// }
	//auth.login(user);
	//};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const response = await axios.post("http://localhost:8080/api/user/login", JSON.stringify({ email: user, password: pwd }), {
	// 			headers: { "Content-Type": "application/json" },
	// 			withCredentials: true,
	// 		});
	// 		setUser("");
	// 		setPwd("");
	// 		console.log(JSON.stringify(response?.data));
	// 		console.log(JSON.stringify(response));
	// 	} catch {}
	const { setAuth } = useContext(AuthContext);

	const errRef = useRef();

	const [email, setemail] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);
	const LOGIN_URL = "/api/user/login";

	useEffect(() => {
		usernameRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [email, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const postData = {
			email: email,
			password: password,
		};

		try {
			console.log(postData);
			const response = await axios.post(LOGIN_URL, postData);
			console.log(response.data);

			// const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), true, {
			// 	headers: { "Content-Type": "application/json" },
			// 	withCredentials: true,
			// });
			// console.log(JSON.stringify(response?.data));
			// //console.log(JSON.stringify(response));
			const accessToken = response?.data?.token;
			console.log(accessToken);
			// const roles = response?.data?.roles;
			// setAuth({ email, password, roles, accessToken });
			setAuth({ email, password, accessToken });

			// setemail("");
			// setPassword("");
			console.log(response.status);
			if (response.status === 200) {
				navigate("/admin/dashboard");
			}
			// setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 400) {
				setErrMsg("Missing Username or Password");
			} else if (err.response?.status === 401) {
				setErrMsg("Unauthorized");
			} else {
				setErrMsg("Login Failed");
			}
			errRef.current.focus();
		}
	};

	return (
		<div className={style.AdminLoginWrapper}>
			{success && <h1>Succcess</h1>}
			<div className={style.AdminLogin}>
				<div className={style.Heading}>
					<h1>
						Admin <span className={style.HeadingHighlight}>Login</span>
					</h1>
					<h2>Enter your credentials to sign in to your account </h2>
				</div>
				<p ref={errorRef} className={errMsg ? "errmeg" : "offscreen"}>
					{errMsg}
				</p>
				{/* <form onSubmit={handlesubmit} autoComplete="off" className={style.FormWrappper}> */}
				<form onSubmit={handleSubmit} autoComplete="off" className={style.FormWrappper}>
					{/* <input name="User_Name" type="text" placeholder="User Name" required ref={usernameRef}></input> */}
					{/* <input name="Password" type="password" placeholder="Password" required></input> */}
					<label htmlFor="username">Email:</label>
					<input type="text" id="username" ref={usernameRef} onChange={(e) => setemail(e.target.value)} value={email} required />
					<label htmlFor="password">password:</label>
					<input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
					<h1>Having trouble in signing in??</h1>
					<button>Sign in</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
