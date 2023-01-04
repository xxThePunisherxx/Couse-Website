import React from "react";
import style from "./Testimonial.module.css";

// asdasd

const Testimonial = () => {
	const Testomonials = [
		{
			Key: 1,
			Name: "Ram Bahadur",
			Review: "(👍 ͡❛ ͜ʖ ͡❛)👍",
			ImageUrl:
				"https://th.bing.com/th/id/R.990375b3a98e90fdd76632b562ad167c?rik=nZvQOs%2bS9THhQw&riu=http%3a%2f%2fcelebdonut.com%2fwp-content%2fuploads%2f2019%2f06%2fchris-hemsworth-attends-the-tag-heuer-autavia-collection-launch-in-sydney-5.jpeg&ehk=Pad8PCUlMRARENtQ9pWShIDPZAjXWAC1F%2fNZAgDg9xg%3d&risl=&pid=ImgRaw&r=0",
		},
		{
			Key: 2,
			Name: "Ram Bahadur",
			Review: "(👍 ͡❛ ͜ʖ ͡❛)👍",
			ImageUrl:
				"https://th.bing.com/th/id/R.990375b3a98e90fdd76632b562ad167c?rik=nZvQOs%2bS9THhQw&riu=http%3a%2f%2fcelebdonut.com%2fwp-content%2fuploads%2f2019%2f06%2fchris-hemsworth-attends-the-tag-heuer-autavia-collection-launch-in-sydney-5.jpeg&ehk=Pad8PCUlMRARENtQ9pWShIDPZAjXWAC1F%2fNZAgDg9xg%3d&risl=&pid=ImgRaw&r=0",
		},
		{
			Key: 3,
			Name: "Ram Bahadur",
			Review: "(👍 ͡❛ ͜ʖ ͡❛)👍",
			ImageUrl:
				"https://th.bing.com/th/id/R.990375b3a98e90fdd76632b562ad167c?rik=nZvQOs%2bS9THhQw&riu=http%3a%2f%2fcelebdonut.com%2fwp-content%2fuploads%2f2019%2f06%2fchris-hemsworth-attends-the-tag-heuer-autavia-collection-launch-in-sydney-5.jpeg&ehk=Pad8PCUlMRARENtQ9pWShIDPZAjXWAC1F%2fNZAgDg9xg%3d&risl=&pid=ImgRaw&r=0",
		},
		{
			Key: 4,
			Name: "Ram Bahadur",
			Review: "(👍 ͡❛ ͜ʖ ͡❛)👍",
			ImageUrl:
				"https://th.bing.com/th/id/R.990375b3a98e90fdd76632b562ad167c?rik=nZvQOs%2bS9THhQw&riu=http%3a%2f%2fcelebdonut.com%2fwp-content%2fuploads%2f2019%2f06%2fchris-hemsworth-attends-the-tag-heuer-autavia-collection-launch-in-sydney-5.jpeg&ehk=Pad8PCUlMRARENtQ9pWShIDPZAjXWAC1F%2fNZAgDg9xg%3d&risl=&pid=ImgRaw&r=0",
		},
		{
			Key: 5,
			Name: "Ram Bahadur",
			Review: "(👍 ͡❛ ͜ʖ ͡❛)👍",
			ImageUrl:
				"https://th.bing.com/th/id/R.990375b3a98e90fdd76632b562ad167c?rik=nZvQOs%2bS9THhQw&riu=http%3a%2f%2fcelebdonut.com%2fwp-content%2fuploads%2f2019%2f06%2fchris-hemsworth-attends-the-tag-heuer-autavia-collection-launch-in-sydney-5.jpeg&ehk=Pad8PCUlMRARENtQ9pWShIDPZAjXWAC1F%2fNZAgDg9xg%3d&risl=&pid=ImgRaw&r=0",
		},
	];
	return (
		<div>
			<h1 className={style.MainHeading}>
				What our <span className={style.HeadingHighlight}>students say</span>
			</h1>
			<div className={style.testomonialsGrid}>
				{Testomonials.map((item) => (
					<div key={item.Key} className={style.testomonial}>
						<img src={item.ImageUrl} alt="" />
						<h2>{item.Review}</h2>
						<h1>{item.Name}</h1>
					</div>
				))}
			</div>
			; ;
		</div>
	);
};

export default Testimonial;
