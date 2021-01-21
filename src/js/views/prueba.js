import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { NavBar } from "../component/navbar.js";

import "../../styles/demo.scss";

export function GroupCard(props) {
	const [count, setCount] = useState(0);
	let { title, description, buttonLabel, buttonURL, imgUrl } = props;

	function addCount() {
		if (count === 2) {
			setCount((count = 0));
		}
	}
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card">
				<img className="card-img-top" src={imgUrl} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<Link to="/Card">
						<a className="btn btn-primary">{buttonLabel}</a>
					</Link>
					<label>
						<i
							className="fa fa-heart text-dark col-6 justify-content-center"
							onClick={() => setCount(count + 1)}
						/>
						{count}
					</label>
				</div>
			</div>
		</div>
	);
}

export function Gallery() {
	return (
		<div>
			<p>
				<img
					className="imgCazaRebelion"
					src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
				/>
			</p>
		</div>
	);
}

GroupCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
	imgUrl: PropTypes.string
};
