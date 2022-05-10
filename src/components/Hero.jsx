import React from "react";
import "./Hero.css";
import { BsTools } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Hero = () => {
	return (
		<Fade bottom>
			<div className="hero">
				<h2 className="hero__text1">Hi, my name is</h2>
				<h1 className="hero__name">Kachi Ozoemena.</h1>
				<h2 className="hero__support">
					I build things for the web.
					<span>
						{" "}
						<BsTools />
					</span>
				</h2>
				<h4 className="hero__description">
					I'm a software engineer specializing in building exceptional digital
					experiences. Currently, I'm focused on building accessible, user
					friendly products.{" "}
				</h4>
				<a
					className="hero__a"
					href="https://drive.google.com/file/d/1YZzwH7wrBK2BRcQUH2DTcYqdmAhPhAGW/view?usp=sharing"
					target={"_blank"}
					rel="noreferrer"
				>
					<button className="hero__resumeButton">Resume</button>
				</a>
			</div>
		</Fade>
	);
};

export default Hero;
