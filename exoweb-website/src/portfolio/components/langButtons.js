import React, { useState, useEffect, useRef, useCallback } from "react";
import Introduction from "./introduction";

function LangButtons()
{
    // let currentEl = null;

    const [langPanelOpen, setLangPanelOpen] = useState(false);
    const [langPanelSelected, setLangPanelSelected] = useState(null);
    let currentElement = useState(null);
    var languageButtons = document.getElementsByClassName("lang-button"); // Language buttons
    var langPanelContainer = document.getElementsByClassName("lang-panel.shown")

    const mainIMG = document.getElementById('details'); // For language large box animation
    const textBox = document.getElementById('textBox'); // For button information

    function handleClickEvent(event)
    {
        if (event.target.className == "lang-button")
        {
            OpenLangPanel(event);
            setLangPanelOpen(true);
            console.log(langPanelOpen);
        }

        // Close lang panel upon clicking outside 
        if (event.target.className !== "lang-button")
        {
            if (langPanelOpen)
            {
                langPanelSelected.className = 'lang-button';
                undoLargeBoxAnim();
                setLangPanelOpen(false);
                console.log("Off");
            }
        }
    }

    function OpenLangPanel(event)
    {
        if (event.target.className.includes('active'))
        {
            setTimeout(() =>
            {
                setLangPanelOpen(true);
                undoLargeBoxAnim();
            }, 50);
            return;
        }

        // Remove underline from old lang
        if (currentElement)
        {
            currentElement.className = 'lang-button';
        }
        event.target.className = "lang-button active";
        setLangPanelSelected(event.target);

        setTimeout(() =>
        {
            let panel = document.getElementById(event.target.getAttribute('data-panel'));
            panel.classList.add('shown');
            mainIMG.classList.remove('shown');
            setLangPanelOpen(true);

            // Animate all the children
            let divs = panel.querySelectorAll('.projects>.proj');
            let timeout = 400;
            for (let div of divs)
            {
                setTimeout(() => div.classList.add('loaded'), timeout);
                timeout += 50;
            }
        }, 50);
    }

    // Close the opening animation for the language buttons
    function undoLargeBoxAnim()
    {
        // Hide current panel
        let shownPanel = document.querySelector('.lang-panel.shown');
        if (shownPanel)
        {
            shownPanel.classList.remove('shown');
            shownPanel.querySelectorAll('.projects>.proj').forEach(c => c.className = 'proj');
            textBox.classList.remove('shown');

            mainIMG.classList.add('shown');
        }
    }

    useEffect(() => 
    {
        document.addEventListener("mousedown", handleClickEvent);

        return () =>
        {
            document.removeEventListener("mousedown", handleClickEvent);
        }
    });

    return (
        <>
            <div id="Header">
                <Introduction />
                <div id="main">
                    <h2>I'm a software developer that works on</h2>
                    <h2>
                        <span className="lang-button" style={{ "color": "#7750A9" }} data-panel="lang1">
                            Game Development
                            <span className="underline" style={{ "backgroundColor": "#7750A9" }}></span>
                        </span>,&nbsp;
                        <span className="lang-button" style={{ "color": "#8A72BE" }} data-panel="lang2">
                            Software Development
                            <span className="underline" style={{ "backgroundColor": "#8A72BE" }}></span>
                        </span>,&nbsp;
                        <span className="lang-button" style={{ "color": "#80D2E6" }} data-panel="lang3">
                            Web Development
                            <span className="underline" style={{ "backgroundColor": "#80D2E6" }}></span>
                        </span>,&nbsp;
                        <span className="lang-button" style={{ "color": "#50BED2" }} data-panel="lang4">
                            Cloud
                            <span className="underline" style={{ "backgroundColor": "#50BED2" }}></span>
                        </span>,
                        and&nbsp;
                        <span className="lang-button" style={{ "color": "#f1ff71" }} data-panel="others">
                            others
                            <span className="underline" style={{ "backgroundColor": "#f1ff71" }}></span>
                        </span>.
                    </h2>


                    <p style={{ "fontSize": "larger" }}>
                        <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                            C#
                            <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                        </span>,&nbsp;
                        <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                            C++
                            <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                        </span>,&nbsp;
                        <span className="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                            Kotlin
                            <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                        </span>,&nbsp;
                        <span className="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                            Go
                            <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                        </span>,&nbsp;
                        <span className="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                            JavaScript
                            <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                        </span>,&nbsp;
                        <span className="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                            ReactJS
                            <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                        </span>,&nbsp;
                        <span className="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                            HTML5
                            <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                        </span>,&nbsp;
                        <span className="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                            CSS
                            <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                        </span>.
                    </p>

                    <p>
                        Please click on the item you would like to see.
                    </p>

                    <div className="copyright">
                        <p>
                            &copy; Connor Easterbrook
                        </p>
                        <div data-project="Credits" className="proj">
                            <button className="credit">
                                <span>Credit</span>
                            </button>
                        </div>
                    </div>

                    <div id="details">
                        <img className="mainImage" alt="Front Logo" src="/assets/images/goatLogo.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LangButtons;
