import React from 'react'
import StyledAbout from './styles/About.styled'
import AboutHead from './styles/AboutHead.styled'
import AboutDescription from './styles/AboutDescription.styled'

const About = () => {
    return (
        <StyledAbout>
            <AboutHead data-aos="zoom-out-right">
                <h3>about me</h3>
                <p>Helping you reach your full potential</p>
            </AboutHead>
            <AboutDescription data-aos="zoom-out-left">
                <div>
                    <h3>Who am I?</h3>
                    <p>I'm a result-oriented, hardworking and effective frontend developer
                        passionate about building, interactive, beautiful, responsive
                        and accessible websites and web applications that solves real life problems
                        and I'm open to opportunities that helps me to grow and improve on my abilities
                    </p>
                </div>
                <div>
                    <h3>What are my skills?</h3>
                    <p>HTML 3+ years</p>
                    <p>CSS 3+ years</p>
                    <p>JavaScript 2+  years</p>
                    <p>React 1 year</p>
                    <p>Git and GitHub 2+ years</p>
                </div>
            </AboutDescription>
        </StyledAbout>
    )
}

export default About
