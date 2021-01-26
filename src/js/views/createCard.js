import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { NavBar } from "../component/navbar";
import { Link } from "react-router-dom";

export function Card(props) {
	const { store, actions } = useContext(Context);
	const [isFavorite, setIsFavorite] = useState(false);
	let { title, description, buttonLabel, buttonURL, imgUrl } = props;

	function saveFavorite() {
		if (isFavorite === false) {
			actions.setFavorite(title);
		} else {
			console.log("delete");
		}
		setIsFavorite(!isFavorite);
	}

	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://rock101online.mx/wp-content/uploads/2019/06/Paul-McCartney-840x658.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<Link to="/createCard">
					<label href={buttonURL} className="btn btn-primary">
						{buttonLabel}
					</label>
				</Link>
				<label>
					<i
						className="fa fa-heart text-dark col-6 justify-content-center"
						onClick={() => {
							saveFavorite();
						}}
					/>
				</label>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
	imgUrl: PropTypes.string
};
