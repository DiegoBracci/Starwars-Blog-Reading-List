import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import ReactDOM from "react-dom";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import { GroupCard, Gallery } from "./views/prueba.js";
import { Card } from "./views/Card.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Navbar />
							<div className="container">
								<Gallery />
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
								<Link classNmae="col-12 justify-content-center" to="/">
									<button className="btn btn-primary">Back home</button>
								</Link>
							</div>
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
