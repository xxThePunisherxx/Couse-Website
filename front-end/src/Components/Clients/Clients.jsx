import React from "react";
import style from "./Clients.module.css";
import { Link } from "react-router-dom";

const Clients = () => {
	const Clients = [
		{ link: "https://broadwayinfosys.com/uploads/career/1533811997.png" },
		{ link: "https://broadwayinfosys.com/uploads/career/1640927833.jpg" },
		{ link: "https://broadwayinfosys.com/uploads/career/1562569188.jpg" },
		{ link: "https://broadwayinfosys.com/uploads/ourclients/1628138685.png" },
		{ link: "https://broadwayinfosys.com/uploads/career/1640318774.jpg" },
	];
	return (
		<div className={style.ClientsContainer}>
			<h1>
				Our <span className={style.HeadingHighlight}>Esteemed Clients</span>
			</h1>
			<div className={style.ImagesGrid}>
				{Clients.map((item) => (
					<img key={item.link} src={item.link} alt={item.link} />
				))}
			</div>

			<button>
				<Link to={"/allClients"}>View More</Link>
			</button>
		</div>
	);
};

export default Clients;
