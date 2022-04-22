import React from "react";
import "./Socials.css";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import {FaInstagram} from "react-icons/fa"

const Socials = () => {
	return (
		<div className="socials">
			<div className="socials__container">
				<div className="socials__height">
					<a href="https" target={"_blank"}>
						<FiGithub className="svg" />
					</a>
				</div>
				<div className="socials__height">
					<a href="https" target={"_blank"}>
						<FiTwitter className="svg" />
					</a>
				</div>
				<div className="socials__height">
					<a href="https" target={"_blank"}>
						<FaInstagram className="svg" />
					</a>
				</div>
				<div className="socials__height">
					<a href="https" target={"_blank"}>
						<FiLinkedin className="svg" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
