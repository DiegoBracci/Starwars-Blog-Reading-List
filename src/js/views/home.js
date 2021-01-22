import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<p>
			<img
				className="imgStarWars"
				src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
			/>
		</p>
		<Link to="/gallery">
			<button href="#" className="pressEnter btn btn-dark">
				Press enter
			</button>
		</Link>
	</div>
);
