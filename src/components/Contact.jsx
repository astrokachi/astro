import React from "react";
import "./Contact.css";
import Socials from "./Socials";

const Contact = () => {
	return (
		<div className="contact" id="contact">
			<div className="contact__container">
				<h2 className="contact__h2">
					<span className="contact__span">03. </span>What's next?
				</h2>

				<h1 className="contact__h1">Get In Touch</h1>
				<p className="contact__p">
					I'm currently looking for internships and/or entry level jobs. My
					inbox is always open. Send a message and I'll definitely respond.
				</p>

				<a
					className="contact__a"
					href="mailto:astrokachi@gmail.com subject=subject text"
				>
					<button className="contact__button">Say Hello</button>
				</a>
			</div>

			<p className="contact__bottomText">
				Inspiration from Brittany Chiang. Built by Kachi Ozoemena.
			</p>
		</div>
	);
};

export default Contact;
