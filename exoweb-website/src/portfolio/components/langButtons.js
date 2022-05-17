import React, { useState, useEffect, useRef } from "react";
import Introduction from "./introduction";

function LangButtons()
{
    let openLang = false;
    let currentEl = null;
    const languageButtons = document.querySelectorAll(".lang-button"); // Language buttons
    const mainIMG = document.querySelector('#details'); // For language large box animation
    const textBox = document.querySelector('#textBox'); // For button information

    const langPanelRef = useRef();
    const [isLangPanelOpen, setIsLangPanelOpen] = useState(false);

    // Close lang panel upon clicking outside 
    useEffect(() => 
    {
        function checkClickLocation(event)
        {
            // if ((".lang-panel-shown").contains(event.target) && (event.target).closest('.lang-button').length === 0 && (event.target).closest("#textBox").is("#textBox") === 0)
            if (isLangPanelOpen && langPanelRef.current && !langPanelRef.current.contains(event.target))
            {
                undoLargeBoxAnim();
                if (currentEl) currentEl.className = 'lang-button';
                setIsLangPanelOpen(false);
            }

            // if (!isLangPanelOpen && )
        }
        document.addEventListener("mousedown", checkClickLocation);

        // document.click((event) =>
        // {
        //     if ((event.target) === languageButtons)
        //     {
        //         console.log("Beep");
        //     }
        // });

        // var openLangSection = function ()
        // {
        //     var attribute = this.getAttribute("")
        // }

        for (var button of languageButtons)
        {
            button.addEventListener("click", () => 
            {
                if (openLang)
                {
                    return;
                }
                openLang = true;

                if (button.className.includes('active'))
                {
                    button.className = 'lang-button';
                    undoLargeBoxAnim();

                    setTimeout(() =>
                    {
                        openLang = false;
                    }, 50);

                    return;
                }

                // Remove underline from old lang
                if (currentEl) currentEl.className = 'lang-button';
                button.className = 'lang-button active';

                // Open Lang Button
                currentEl = button;
                undoLargeBoxAnim();

                setTimeout(() =>
                {
                    let panel = document.getElementById(button.getAttribute('data-panel'));
                    panel.classList.add('shown');
                    mainIMG.classList.remove('shown');
                    openLang = false;

                    // Animate all the children
                    let divs = panel.querySelectorAll('.projects>.proj');
                    let timeout = 400;
                    for (let div of divs)
                    {
                        setTimeout(() => div.classList.add('loaded'), timeout);
                        timeout += 50;
                    }
                }, 50);
            });
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

        return () =>
        {
            document.removeEventListener("mousedown", checkClickLocation);
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
