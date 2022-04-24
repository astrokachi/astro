import React from "react";
import "./Socials.css";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Socials = () => {
	return (
		<div className="socials">
			<div className="socials__container">
				<div className="socials__height">
					<a
						href="https://github.com/astrokachi"
						target={"_blank"}
						rel="noreferrer"
					>
						<FiGithub className="svg" />
					</a>
				</div>
				<div className="socials__height">
					<a
						href="https://twitter.com/kachi_oz"
						target={"_blank"}
						rel="noreferrer"
					>
						<FiTwitter className="svg" />
					</a>
				</div>
				<div className="socials__height">
					<a
						href="https://instagram.com/kachi_oz_"
						target={"_blank"}
						rel="noreferrer"
					>
						<FaInstagram className="svg" />
					</a>
				</div>
				<div className="socials__height">
					<a
						href="https://www.linkedin.com/in/ozoemenaekachi"
						target={"_blank"}
						rel="noreferrer"
					>
						<FiLinkedin className="svg" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
