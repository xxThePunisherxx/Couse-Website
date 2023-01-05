import React from "react";
import TestomonialCarousel from "../../Components/TestomonialCarousel/TestomonialCarousel";

import { Testomonials } from "../../Data/Testimonial";
import style from "./Test.module.css";

const Test = () => {
	return (
		<div className={style.mid}>
			<TestomonialCarousel images={Testomonials} EnableautoPlay={true} ShowItemFor={5000} />
		</div>
	);
};

export default Test;
