import React from 'react';
import './About.css';
import {StevensPFP} from '../../assets';

const About = () => {
    return (
        <div id="about" className="about-container">
            <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=500&color=BB60FFB3&background=FFFFFF00&center=true&vCenter=true&width=435&lines=Computer+Engineering+Undergrad;Fullstack+Software+Developer;Videogame+Modder" alt="Typing SVG" /></a>
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
                <img src={StevensPFP} alt="Erik Bobinski" className="about-image" />
                <p className="about-description">
                    Hi! I'm Erik Bobinski. 
                    I am graduating from Stevens Institute of Technology with a
                    Bachelors of Engineering in Computer Engineering in May 2025. 
                    My passion for engineering lies within software development, 
                    and I'm always looking for new experiences!
                </p>
            </div>
        </div>
    );
};

export default About
