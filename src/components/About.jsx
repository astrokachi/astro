import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className="about" id="about">
			<div className="about__container">

			<div className="about__headerContainer">
				<span className="about__number">01. </span>
				<h2 className="about__header">About Me</h2>
				<div class="about__line"></div>
			</div>
			<section className="about__section">
				<p className="about__paragraph">
					Hello! My name is Kachi Ozoemena and I'm software developer currently
					focused on the frontend web developement. I enjoy that this allows me
					to be both creative and technical at the same time.
				</p>
				<p className="about__paragraph">
					As a self taught developer I've had to be able to pick up new skills
					fast, be adaptable, reliable and precise. Over the past year I've been
					able to learn how to implement different features that make user
					experience top notch.
				</p>
        <p className="about__paragraph">
          Here's some of the technologies I've worked with:
        </p>
        <div className="about__listFlex">
          <ul>
            <li>JavaScript(ES6)</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
          <ul>
            <li>Firebase</li>
            <li>TailwindCss</li>
            <li>Node js</li>
          </ul>
        </div>
			</section>
			</div>
		</div>
	);
};

export default About;
