import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Email from "./components/Email";
// import {} from 'react-router-dom'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Work from "./components/Work";

function App() {
	const [position, setPosition] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		const position = window.pageYOffset;
		if (position === 0) {
			setPosition(false);
		}
		setPosition(position);
		// console.log(position)
	};

	console.log(position);
	return (
		<div className="App">
			<Header position={position} />
			<Socials />
			<Email />
			<div className="contain">
				<Hero />
				<About />
				<Work />
			</div>
		</div>
	);
}

export default App;
