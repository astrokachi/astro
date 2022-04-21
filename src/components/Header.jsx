import React from "react";
import { IoIosRocket } from "react-icons/io";
import "./Header.css";

const Header = (position) => {
	return (
		<div className="header">
			<div className="header__container">
				<div className="header__logo">
					<h2 className="header__initials">astro</h2>
					<IoIosRocket className="header__rocket" />
				</div>
				<div className={`header__nav`}>
					<h3 className={"header__text"}>
						<a href="#about">
							<span>01 </span>About
						</a>
					</h3>
					<h3 className="header__text">
						<a href="#experience">
							<span>02 </span>Experience
						</a>
					</h3>
					<h3 className="header__text">
						<a href="#work">
							<span>03 </span>Work
						</a>
					</h3>
					<h3 className="header__text">
						<a href="contact">
							<span>04 </span>Contact
						</a>
					</h3>
				</div>
				<button className="header__resumeButton"> Resume</button>
			</div>
		</div>
	);
};

export default Header;
