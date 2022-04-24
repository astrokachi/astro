import React, { useEffect, useState } from "react";
import { IoIosRocket } from "react-icons/io";
import "./Header.css";

const Header = ({ ham, setHam }) => {
	useEffect(() => {
		if (ham) document.body.style.overflow = "hidden";
		else {
			document.body.style.overflow = "";
		}
	});
	return (
		<div className="header">
			<div className="header__container">
				<div className="header__logo">
					<h2 className="header__initials">astro</h2>
					<IoIosRocket className="header__rocket" />
				</div>
				<div className={`blur ${ham && "ham"}`}>
					<div className="head__">
						<div className="header__">
							<h3 className={`header__text`}>
								<a href="#about" onClick={() => setHam(false)}>
									<span>01. </span>About
								</a>
							</h3>
							<h3 className="header__text">
								<a href="#work" onClick={() => setHam(false)}>
									<span>02. </span>Work
								</a>
							</h3>
							<h3 className="header__text">
								<a href="#contact" onClick={() => setHam(false)}>
									<span>03. </span>Contact
								</a>
							</h3>
						</div>
					</div>
				</div>
				<div className={`header__nav`} onClick={() => setHam(!ham)}>
					<div className="header__hamburger">
						<span className={`hamLine a ${ham && "ham"}`}></span>
						<span className={`hamLine b ${ham && "ham"}`}></span>
						<span className={`hamLine c ${ham && "ham"}`}></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
