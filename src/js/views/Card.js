import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export function createCard(props) {
	const [count, setCount] = useState(0);
	let { title, description, buttonLabel, buttonURL, imgUrl } = props;

	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card">
				<img className="card-img-top" src={imgUrl} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<a href={buttonURL} className="btn btn-primary">
						{buttonLabel}
					</a>
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

export function Card() {
	return (
		<createCard
			title="Paul Mccartney"
			description="James Paul McCartney es un cantautor, compositor, músico, multiinstrumentista, escritor y actor británico"
			buttonLabel="Find out more!"
			buttonURL="https://es.wikipedia.org/wiki/Paul_McCartney"
			imgUrl="https://rock101online.mx/wp-content/uploads/2019/06/Paul-McCartney-840x658.jpg"
		/>
	);
}

createCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
	imgUrl: PropTypes.string
};
