import React from "react";
import "./Work.css";
import { FiGithub } from "react-icons/fi";
import { VscLinkExternal } from "react-icons/vsc";

const Work = () => {
	return (
		<div className="work">
			<div className="about__headerContainer">
				<span className="about__number">02. </span>
				<h2 className="about__header">Some of my works</h2>
				<div class="about__line"></div>
			</div>

			<div className="reuse">
				<div className="work__boxes">
					<div className="work__imageCover">
						<div className="work__image"></div>
					</div>

					<div className="work__text">
						<header>
							<p className="work__mainHeading">Featured Project</p>
							<p className="work__projectName">The Netflix build</p>
						</header>
						<div className="work__chatBox">
							A web app for visualizing movie data. Login or Sign up and see a
							list of your top netflix orignal movies along with categories like
							action, romance documentaries and more. Choose a plan and make
							payments to subscribe.
						</div>
						<div className="work__tech">
							<p className="p">React</p>
							<p className="p">Firebase</p>
							<p className="p">Material UI</p>
							<p className="p">IMDB</p>
						</div>

						<div className="work__icons">
							<FiGithub />
							<VscLinkExternal />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
