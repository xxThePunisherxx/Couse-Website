import React, { useState } from "react";
import { useEffect } from "react";
import style from "./Contact.module.css";

const Contact = () => {
	const [windowDimenion, detectHW] = useState({
		winWidth: window.innerWidth,
		winHeight: window.innerHeight,
	});
	const detectSize = () => {
		detectHW({
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", detectSize);

		return () => {
			window.removeEventListener("resize", detectSize);
		};
	}, [windowDimenion]);

	return (
		<div className={style.Contact_Wrapper}>
			<div className={style.message_Wrapper}>
				<div className={style.message_heading}>
					<h1>
						We've been waiting <br />
						<span className={style.HeadingHighlight}> for you.</span>
					</h1>
					<h2>We want to hear form you. Let us know how we can help.</h2>

					<iframe
						src="https://docs.google.com/forms/d/e/1FAIpQLSfEBJhFbBBoX1Aldybh3C_LjFy01DaS2EOVJVltSLRGXLf1og/viewform?embedded=true"
						width={windowDimenion.winWidth - 50}
						height="812"
						title="Message"
					>
						Loading…
					</iframe>
				</div>
			</div>

			{/* <div className={style.FAQ_Wrapper}>
				<div className={style.FAQ_header}>
					<h1>
						Some <span className={style.HeadingHighlight}>FAQs</span>
					</h1>
					<div className={style.FAQ_lists}>
						<div className={style.Individual_FAQ}>
							<details>
								<summary>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ab </summary>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda eum velit neque in soluta alias dicta reiciendis vero
									aspernatur reprehenderit nulla porro voluptates facilis necessitatibus, placeat magnam aperiam sint.
								</p>
							</details>
						</div>
						<div className={style.Individual_FAQ}>
							<details>
								<summary>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ab? </summary>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda eum velit neque in soluta alias dicta reiciendis vero
									aspernatur reprehenderit nulla porro voluptates facilis necessitatibus, placeat magnam aperiam sint.
								</p>
							</details>
						</div>
						<div className={style.Individual_FAQ}>
							<details>
								<summary>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ab? </summary>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda eum velit neque in soluta alias dicta reiciendis vero
									aspernatur reprehenderit nulla porro voluptates facilis necessitatibus, placeat magnam aperiam sint.
								</p>
							</details>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Contact;
