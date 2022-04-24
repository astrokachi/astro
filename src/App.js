import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Email from "./components/Email";
// import {} from 'react-router-dom'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Work from "./components/Work";
import { IoIosRocket } from "react-icons/io";

function App() {
	const [ham, setHam] = useState(false);
	const [isloaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(false);

		setTimeout(() => {
			setIsLoaded(true);
			console.log("page is loaded");
		}, 3000);
	}, []);

	return (
		<>
			{isloaded ? (
				<div className={`app`}>
					<Header ham={ham} setHam={setHam} />
					<div onClick={() => setHam(false)}>
						<div className={`contain ${ham ? "true" : ""}`}>
							<Socials />
							<Email />
							<Hero />
							<About />
							<Work />
							<Contact />
						</div>
					</div>{" "}
				</div>
			) : (
				<div className="loading">
					<IoIosRocket className="sv" />
				</div>
			)}
		</>
	);
}

export default App;
