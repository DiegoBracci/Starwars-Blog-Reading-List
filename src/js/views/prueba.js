import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { NavBar } from "../component/navbar.js";

import "../../styles/demo.scss";

function GroupCard(props) {
	const [count, setCount] = useState(0);
	let { title, description, buttonLabel, buttonURL, imgUrl } = props;

	// function addCount() {
	// 	if (count === 2) {
	// 		setCount((count = 0));
	// 	}
	// }
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card">
				<img className="card-img-top" src={imgUrl} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<Link to="/home">
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
			<div className="row">
				<GroupCard
					title="Paul Mccartney"
					description="James Paul McCartney es un cantautor, compositor, músico, multiinstrumentista, escritor y actor británico"
					buttonLabel="Find out more!"
					buttonURL="https://es.wikipedia.org/wiki/Paul_McCartney"
					imgUrl="https://rock101online.mx/wp-content/uploads/2019/06/Paul-McCartney-840x658.jpg"
				/>
				<GroupCard
					title="Bob Dylan"
					description="Bob Dylan, ​ registrado al nacer como Robert Allen Zimmerman, es un músico, compositor, cantante y poeta estadounidense, ampliamente considerado como una de las figuras más prolíficas e influyentes en la música popular del siglo XX y de comienzos del siglo XXI.​​​"
					buttonLabel="Find out more!"
					buttonURL="https://es.wikipedia.org/wiki/Bob_Dylan"
					imgUrl="https://www.radiojai.com/wp-content/uploads/2020/10/bobdylan.jpg"
				/>
				<GroupCard
					title="Mick Jagger"
					description="Michael Philip Jagger, ​ conocido profesionalmente como Mick Jagger, es un cantante, compositor, músico y actor británico, reconocido por ser el principal cantante de la banda de rock The Rolling Stones."
					buttonLabel="Find out more!"
					buttonURL="https://es.wikipedia.org/wiki/Mick_Jagger"
					imgUrl="https://pbs.twimg.com/profile_images/890611271028137984/_5xAXOi-.jpg"
				/>
				<GroupCard
					title="Elvis Presley"
					description="Elvis Aaron Presley​ fue uno de los cantantes estadounidenses e iconos culturales más populares del siglo XX, conocido ampliamente bajo su nombre de pila, Elvis. Se hace referencia a él frecuentemente como «El Rey del Rock and Roll» o simplemente «El Rey»."
					buttonLabel="Find out more!"
					buttonURL="https://es.wikipedia.org/wiki/Elvis_Presley"
					imgUrl="https://cdns-images.dzcdn.net/images/artist/935d35a45e061e7640a0becfa42cef6e/500x500.jpg"
				/>
			</div>
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
