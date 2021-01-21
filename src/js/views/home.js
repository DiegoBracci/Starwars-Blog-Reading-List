import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<p>
			<img
				className="imgStarWars"
				src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
			/>
		</p>
		<Link to="/demo">
			<a href="#" className="pressEnter btn btn-dark">
				Press enter
			</a>
		</Link>
	</div>
);
