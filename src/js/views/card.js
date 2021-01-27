import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { NavBar } from "../component/navbar";
import { Link } from "react-router-dom";

const black = { color: "black", paddingLeft: "60px", paddingTop: "5px" };

export function Card(props) {
	const { store, actions } = useContext(Context);
	const [isFavorite, setIsFavorite] = useState(false);
	const [heartColor, setHeartColor] = useState(black);
	let { title, description, buttonLabel } = props;

	//Favorites List

	const saveFavorite = () => {
		if (isFavorite === false) {
			actions.setFavorite(title);
			setIsFavorite(!isFavorite);
		} else if (isFavorite === true) {
			// console.log(true);
			actions.setRemoveFavorite(title);
			setIsFavorite(!isFavorite);
		}
	};
	// Cambio de color del corazon de negro a rojo

	const ChangeHeartColor = e => {
		if (heartColor.color === "black") {
			setHeartColor({ color: "red", paddingLeft: "60px", paddingTop: "5px" });
		} else if (heartColor.color === "red") {
			setHeartColor(black);
		}
	};
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
				<Link to="/fullCard">
					<label href="#" className="btn btn-primary">
						{buttonLabel}
					</label>
				</Link>
				<label>
					<i
						className="fa fa-heart col-6 justify-content-center"
						style={heartColor}
						onClick={() => {
							saveFavorite(), ChangeHeartColor();
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
