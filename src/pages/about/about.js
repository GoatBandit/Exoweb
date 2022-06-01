// import { useEffect, useState } from "react";
import "./aboutCSS.css";
import CV from "../../assets/documents/cv/cv.pdf";
import { Link } from "react-router-dom";

function About()
{
    function openTab(buttonName)
    {
        if (buttonName === "about")
        {
            document.querySelector(".about").style.display = "block";
            document.querySelector(".about").classList.add("transform-in");
        }
        else if (buttonName === "work")
        {
            document.querySelector(".work").style.display = "block";
        }
        else if (buttonName === "store")
        {
            document.querySelector(".store").style.display = "block";
        }
        else return;
    }

    function closeTab()
    {
        const about = document.querySelector(".about");
        if (about)
        {
            about.style.display = "none";
        }

        const work = document.querySelector(".work");
        if (work)
        {
            work.style.display = "none";
        }

        const store = document.querySelector(".store");
        if (store)
        {
            store.style.display = "none";
        }
    }


    return (
        <div id="aboutContainer">
            <div id="header">

                <div className="mainPic">
                    <img className="circleImage" alt="FrontPicture" src="/goatLogo.png" />
                    <div className="circleText">
                        <p>
                            <br />
                            BSc Games Technology
                            <br />
                            -
                            <br />
                            The University of the West of England
                        </p>
                    </div>
                </div>

                <div className="content">
                    <p>
                        I'm <strong>Connor Easterbrook</strong>, also known as <strong>GoatBandit</strong>.
                        <br /> Check out 'ABOUT' for more information!
                    </p>
                </div>

                <div className="buttons">
                    <li>
                        <p onClick={() => openTab("about")}>About</p>
                    </li>
                    <li>
                        <p onClick={() => openTab("work")}>Work</p>
                    </li>
                    {/* <li>
                        <p onClick={() => openTab("store")}>EXOWEB</p>
                    </li> */}
                </div>
            </div>

            <div id="mainText" className="openSquish">
                <div className="about">
                    <h2> About Me </h2>
                    <p>
                        Hello, I'm Connor Easterbrook, though I am better known through my professional
                        online identification, GoatBandit.<br /><br />

                        I've found my ideal career.<br /><br />

                        Growing up, I never truly knew what I wanted to do. Growing up with three older
                        brothers showed me that the correct career will eventually find its way on my path.
                        Well, it has. It almost seems obvious at this point, growing up playing video games,
                        using apps, wondering how they were created. Suddenly I am one of those magicians
                        that fourteen year old me only read about.<br /><br />

                        Funnily enough, it all began with an app released in 2013 called 'Flappy Bird.' It
                        became a popular craze for a few months and then fizzled out as kids moved on to
                        other things. Six years later in 2019, I stumbled across a game development tutorial
                        for a Flappy Bird clone. One week later and I had a clone of this game I spent many
                        hours on when I was a teenager. I saw its flaws and rough edges and realised that
                        there was a lot of room to grow. It has all been up from there, to be approaching
                        the end of my BSc in Games Technology.<br /><br />

                        I love learning new ways further evolve my programming and seeing how the end
                        product is always more polished than my previous one, taking notes on what can be
                        improved in the future. My specialities include adaptability to learning new skills and programming languages quickly, problem-solving, responsive design principles, website
                        optimization, communication, and source control.
                    </p>
                    <span className="aboutClose" onClick={closeTab}> &times; </span>
                </div>

                <div className="work">
                    <h2> Work & Skills </h2>
                    <p>
                        My CV details my employment and educational background while my Portfolio discusses
                        my published work. <br /><br />
                        Please click the button below for your desired documententation:
                    </p>
                    <button className="cvButton" onClick={() => window.open(CV)}>CV</button>
                    {/* <button className="resumeButton" onClick={() => window.open('/portfolio')}>PORTFOLIO</button> */}
                    <Link to="/portfolio">
                        <button className="resumeButton"
                        // onClick={() => window.open('/portfolio')}
                        >PORTFOLIO</button>
                    </Link>
                    <span className="aboutClose" onClick={closeTab}> &times; </span>
                </div>

                {/* <div className="store">
                    <h2> EXOWEB </h2>
                    <p>
                        EXOWEB is my company. <br />
                        Click the button below for more information.
                    </p>
                    <button className="storeButton" onClick="window.open('index')"> EXOWEB </button>
                    <a className="aboutClose" onClick={closeTab}> &times; </a>
                </div> */}
            </div>


            <div className="copyright">
                <p>
                    &copy; Connor Easterbrook
                </p>
            </div>

            <div id="aboutbg" className="slowFadeIn">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div id="black"></div>
        </div>
    )
}

export default About
