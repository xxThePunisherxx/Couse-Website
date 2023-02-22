import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import style from "./UpdateTestomonial.module.css";
import axios from "axios";
import useFetch from "../../Utils/Hooks/fetch";
import useAuth from "../../hooks/useAuth";
import uuid from "react-uuid";
import MessageBoard from "../../Components/Message Board/MessageBoard";

const AddTestomonial = () => {
	const testominialRef = useRef();
	const { auth } = useAuth();
	const navigate = useNavigate();
	const { testomonialID } = useParams();

	const [selectedFile, setSelectedFile] = useState();
	const [uploadedURl, setUploadedURl] = useState("");
	const [showSuccessUpload, setShowSuccessUpload] = useState(false);
	const [showFailedUpload, setShowFailedUpload] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [showFailed, setShowFailed] = useState(false);
	const [showImage, setShowImage] = useState(false);
	const [showMaxLen, setShowMaxLen] = useState(false);
	const [showSelectCat, setShowSelectCat] = useState(false);
	const [TestomonialResponse, setTestomonialResponse] = useState([{}]);

	const { data: trainingResponse } = useFetch("https://learning-management-system-kx6y.onrender.com/api/training");

	useEffect(() => {
		const fetchData = async () => {
			// get request to get pre-update value of the course.
			try {
				let response = await axios.get(`https://learning-management-system-kx6y.onrender.com/api/testimonial/${testomonialID}`, {
					headers: {
						Authorization: `Bearer ${auth.Token}`,
						withCredentails: true,
					},
				});

				setTestomonialResponse(response.data.testimonial);
				setUploadedURl(response.data.testimonial.image);
				setShowImage(true);
			} catch (error) {
				if (error.response) {
					console.log(error.response.status);
					console.log(error.response.headers);
				} else {
					console.log(`Error: ${error.message}`);
				}
			}
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [testomonialID]);

	console.log("🚀 ~ file: UpdateTestomonial.jsx:28 ~ AddTestomonial ~ TestomonialResponse:", TestomonialResponse);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		let enterdData = Object.fromEntries(data.entries());
		if (enterdData.testominial.length > 500) {
			setShowMaxLen(true);
			setTimeout(() => {
				setShowMaxLen(false);
			}, 3000);
		}

		const postData = {
			name: enterdData.students_name,
			image: uploadedURl,
			description: enterdData.testominial,
			course: enterdData.dropDown,
		};
		// console.log(postData);
		if (enterdData.dropdown !== "null" && enterdData.testominial.length < 500) {
			try {
				const response = await axios.put(`https://learning-management-system-kx6y.onrender.com/api/testimonial/update/${testomonialID}`, postData, {
					headers: {
						Authorization: `Bearer ${auth.Token}`,
						withCredentails: true,
					},
				});
				if (response.status === 201) {
					setShowSuccess(true);
					setTimeout(() => {
						setTimeout(() => {
							setShowSuccess(false);
						}, 1000);
						navigate("/admin/dashboard");
					}, 2000);
				}
			} catch (err) {
				setShowFailed(true);
				setTimeout(() => {
					setShowFailed(false);
				}, 1000);
			}
		} else if (enterdData.dropdown === "null") {
			setShowSelectCat(true);
			setTimeout(() => {
				setShowSelectCat(false);
			}, 3000);
		}
	};
	// file upload functions
	const fileSelectedHandler = async (event) => {
		setSelectedFile(event.target.files[0]);
	};
	const handleUpload = async (event) => {
		event.preventDefault();
		const fd = new FormData();
		fd.append("file", selectedFile);
		try {
			let response = await axios.post("https://learning-management-system-kx6y.onrender.com/api/file/single", fd, {
				headers: {
					Authorization: `Bearer ${auth.Token}`,
					withCredentails: true,
				},
			});
			if (response) {
				setUploadedURl(response.data.path.path);
				setShowSuccessUpload(true);
				setShowImage(true);
				setTimeout(() => {
					setShowSuccessUpload(false);
				}, 1000);
			}
		} catch (err) {
			setShowFailedUpload(true);
			setTimeout(() => {
				setShowFailedUpload(false);
			}, 1000);
		}
	};

	return (
		<>
			<div className={style.AddTestomonial_Wrapper}>
				<div className="AddTestomonial">
					<h1>
						Add <span className={style.Heading_Highlight}>Testominial</span>
					</h1>

					<form onSubmit={handleSubmit} autoComplete="off" className={style.Form_Wrapper}>
						<h1>Students name</h1>
						<input name="students_name" type="text" defaultValue={TestomonialResponse.name} required ref={testominialRef}></input>
						<h1>Students photo</h1>
						<div className={style.ImageUpload}>
							<input name="students_Image" type="file" onChange={fileSelectedHandler}></input>
							<button onClick={handleUpload}>Upload image</button>
						</div>
						{showImage && <img className={style.Uplaod_Img} src={uploadedURl} alt="Upload  preview"></img>}
						<h1 className={style.ck}>Testomonial </h1>
						{showMaxLen && <h1 style={{ color: "red" }}>Maximum of 500 characters</h1>}
						<textarea
							name="testominial"
							rows="5"
							cols="40"
							defaultValue={TestomonialResponse.description}
							placeholder="Max length 500 characters"
						></textarea>
						<h1>Course Enrolled</h1>
						{showSelectCat && <h1 style={{ color: "red" }}>Select a course category</h1>}
						<select name="dropDown">
							<option value={TestomonialResponse.course}>{TestomonialResponse.course}</option>
							{trainingResponse.training.map((Category) => (
								<option key={uuid()} value={Category.title}>
									{Category.title}
								</option>
							))}
						</select>
						<button>Submit</button>
					</form>
				</div>
			</div>

			{showSuccess && (
				//* Success Message on succesfull course addition
				<MessageBoard Message_type="successBoard" Message="Testomonial Updated Succesfully" />
			)}
			{showSuccessUpload && (
				//* Success Message on succesfull course addition
				<MessageBoard Message_type="successBoard" Message="Image uploaded succesfully" />
			)}
			{showFailed && (
				//* failed Message on course addition
				<MessageBoard Message_type="FailedBoard" Message="Could not update testomonial. Please try again." />
			)}
			{showFailedUpload && (
				//* failed Message on course addition
				<MessageBoard Message_type="FailedBoard" Message="Could not upload image. Please try again." />
			)}
		</>
	);
};

export default AddTestomonial;
