import React from "react";
import TestomonialCarousel from "../../Components/TestomonialCarousel/TestomonialCarousel";

import { Testomonials } from "../../Data/Testimonial";
import style from "./Test.module.css";
import { useState, useEffect } from "react";

const Test = () => {
	const [test, setTest] = useState([{ firstName: "", lastName: { middleName: "", finalName: "" } }]);
	useEffect(() => {
		// setTest((test) => ({ ...test, firstName: "asdasdad" }));
		setTest((test) => ({ ...test, lastName: { middleName: "middTest", finalName: "finalTEst" } }));
	}, []);
	console.log(test);
	return (
		<div className={style.mid}>
			<TestomonialCarousel images={Testomonials} EnableautoPlay={true} ShowItemFor={5000} />
		</div>
	);
};

export default Test;
