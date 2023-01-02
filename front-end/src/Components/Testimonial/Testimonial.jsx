import React from "react";
import style from "./Testimonial.module.css";

const Testimonial = () => {
	const Testomonials = [
		{ Key: 1, Name: "Ram Bahadur", Review: "(👍 ͡❛ ͜ʖ ͡❛)👍", Star: 3, Job_Title: "I dk ", Company: "Whocares", College: "I dont care!!1" },
		{ Key: 1, Name: "Ram Bahadur", Review: "(👍 ͡❛ ͜ʖ ͡❛)👍", Star: 3, Job_Title: "I dk ", Company: "Whocares", College: "I dont care!!1" },
		{ Key: 1, Name: "Ram Bahadur", Review: "(👍 ͡❛ ͜ʖ ͡❛)👍", Star: 3, Job_Title: "I dk ", Company: "Whocares", College: "I dont care!!1" },
		{ Key: 1, Name: "Ram Bahadur", Review: "(👍 ͡❛ ͜ʖ ͡❛)👍", Star: 3, Job_Title: "I dk ", Company: "Whocares", College: "I dont care!!1" },
		{ Key: 1, Name: "Ram Bahadur", Review: "(👍 ͡❛ ͜ʖ ͡❛)👍", Star: 3, Job_Title: "I dk ", Company: "Whocares", College: "I dont care!!1" },
	];
	return (
		<div>
			<h1 className={style.h1}>Testimonial</h1>
			<div className={style.testomonialsGrid}>
				{Testomonials.map((item) => (
					<div key={item.key}>
						<h1>{item.Name}</h1>
						<h2>{item.Review}</h2>
						<h2>{item.Job_Title}</h2>
						<h2>{item.Company}</h2>
						<h2>{item.College}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonial;
