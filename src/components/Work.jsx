/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Work.css";
import { FiGithub } from "react-icons/fi";
import { VscLinkExternal } from "react-icons/vsc";

const Work = () => {
	return (
		<div className="work" id="work">
			<div className="work__container">
				<div className="about__headerContainer">
					<span className="about__number">02. </span>
					<h2 className="about__header">Some of my works</h2>
					<div class="about__line"></div>
				</div>

				<div className="reuse">
					<div className="work__boxes">
						<a
							className="work__imageCover"
							href="https://kachis-movie-app.netlify.app/"
							target={"_blank"}
							rel="noreferrer"
						>
							<div className="work__image a"></div>
						</a>

						<div className="work__text">
							<header>
								<p className="work__mainHeading">Featured Project</p>
								<p className="work__projectName">The Netflix build</p>
							</header>
							<div className="work__chatBox">
								A web app for visualizing movie data. Login or Sign up and see a
								list of your top netflix orignal movies along with categories
								like action, romance documentaries and more. Choose a plan and
								make payments to subscribe.
							</div>
							<div className="work__tech">
								<p className="p">React</p>
								<p className="p">Firebase</p>
								<p className="p">Redux</p>
								{/* <p className="p">Material UI</p> */}
								{/* <p className="p">TMDB</p> */}
							</div>

							<div className="work__icons">
								<a
									href="https://github.com/astrokachi/netflix-clone"
									target={"_blank"}
									className="a"
									rel="noreferrer"
								>
									<FiGithub className="github" />
								</a>
								<a
									href="https://kachis-movie-app.netlify.app/"
									className="a"
									target={"_blank"}
									rel="noreferrer"
								>
									<VscLinkExternal className="link" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="reuse__inverse">
					<div className="work__boxesInverse">
						<a
							className="work__imageCoverInverse"
							target={"_blank"}
							href="https://airbnb-clone-silk-one.vercel.app/"
							rel="noreferrer"
						>
							<div className="work__imageInverse a"></div>
						</a>

						<div className="work__textInverse">
							<header>
								<p className="work__mainHeadingInverse">Featured Project</p>
								<p className="work__projectNameInverse">The Airbnb build</p>
							</header>
							<div className="work__chatBoxInverse">
								A modern design of the popular travel website airbnb. Search for
								where ever you want to go and get great suggestions based on the
								filters you choose.
							</div>
							<div className="work__techInverse">
								<p className="pInverse">NextJs</p>
								<p className="pInverse">Tailwind css</p>
								{/* <p className="pInverse">Material UI</p> */}
								{/* <p className="pInverse">IMDB</p> */}
							</div>

							<div className="work__iconsInverse">
								<a
									href="https://github.com/astrokachi/airbnb-clone"
									className="ia"
									target={"_blank"}
									rel="noreferrer"
								>
									<FiGithub className="githubInverse" />
								</a>
								<a
									href="https://airbnb-clone-silk-one.vercel.app/"
									className="ia"
									target={"_blank"}
								>
									<VscLinkExternal className="linkInverse" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="reuse">
					<div className="work__boxes">
						<a
							className="work__imageCover"
							href="https://kachis-ecommerce-app.netlify.app/"
							target={"_blank"}
							rel="noreferrer"
						>
							<div className="work__image b"></div>
						</a>

						<div className="work__text">
							<header>
								<p className="work__mainHeading">Featured Project</p>
								<p className="work__projectName">My E-commerce app</p>
							</header>
							<div className="work__chatBox">
								A mock online store for purchasing furniture of all sorts. Login
								with your email and password, choose the products you want to
								buy and add them to your cart. View and edit your cart as you
								like.
							</div>
							<div className="work__tech">
								<p className="p">React</p>
								<p className="p">Firebase</p>
								<p className="p">Redux</p>
								{/* <p className="p">Material UI</p> */}
								{/* <p className="p">TMDB</p> */}
							</div>

							<div className="work__icons">
								<a
									href="https://github.com/astrokachi/clothing-store"
									target={"_blank"}
									className="a"
									rel="noreferrer"
								>
									<FiGithub className="github" />
								</a>
								<a
									href="https://kachis-ecommerce-app.netlify.app/"
									className="a"
									target={"_blank"}
									rel="noreferrer"
								>
									<VscLinkExternal className="link" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
