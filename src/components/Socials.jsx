import React from "react";
import "./Socials.css";
import { FiGithub, FiTwitter } from "react-icons/fi";

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
			</div>
		</div>
	);
};

export default Socials;
