import React, { useState, useEffect } from "react";
import Filter from "./filter"
import Projects from "./projectHighlight"
import ProjectDetails from "./projectDetails";

const allCategories =
    [
        "all",
        ...new Set(Projects.map(item => item.category))
    ];

function LangButtons()
{
    const [langPanelOpen, setLangPanelOpen] = useState(false);

    const mainIMG = document.getElementById('details'); // For language large box animation

    const [menuItem, setMenuItem] = useState(Projects);
    const [filterButtons, setFilterButtons] = useState(allCategories);


    function handleClickEvent(event)
    {
        // Close lang panel upon clicking outside 
        if (event.target.className !== "lang-button" && event.target.className !== "lang-panel shown")
        {
            for (let shownPanel of document.getElementsByClassName("lang-panel shown"))
            {
                if (!shownPanel.contains(event.target) && langPanelOpen)
                {
                    // langPanelSelected.className = 'lang-button';
                    undoLargeBoxAnim();
                    setLangPanelOpen(false);
                }
            }
        }
    }

    const filter = (button) =>
    {
        if (button === "all")
        {
            setMenuItem(Projects);
        }
        else
        {
            const filteredData = Projects.filter(item => item.category === button);
            setMenuItem(filteredData);
        }
    }

    function showProjectText(event)
    {
        const textBox = document.getElementById('textBox'); // For button information
        textBox.classList.add('shown');
        textBox.openingElement = event.target;
    }

    // Close the opening animation for the language buttons
    function undoLargeBoxAnim()
    {
        // Hide current panel
        let shownPanel = document.querySelector('.lang-panel.shown');
        const textBox = document.getElementById('textBox'); // For button information
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
                <div id="Start">
                    <h2>I'm a software developer that works on</h2>

                    <Filter filterButton={filterButtons} filter={filter} />

                    <div id="details">
                        <div className="table">
                            {
                                menuItem.map((item) =>
                                {
                                    return <div className="item-con" id={item.category} key={item.id}
                                        onClick={showProjectText}>
                                        <div className="item-container" data-cat={item.category}>
                                            <img src={item.firstImage} alt=""
                                                onMouseEnter={e => (e.currentTarget.src = item.secondImage)}
                                                onMouseLeave={e => (e.currentTarget.src = item.firstImage)} />
                                            <div className="tip">{item.languages}</div>
                                            <div className="tip">{item.skills}</div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            {item.github && (
                                                <a className="ref" href={item.github} target={item.github}>Github</a>
                                            )}
                                        </div>

                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className="copyright">
                        <p>
                            &copy; Connor Easterbrook
                        </p>
                    </div>

                </div>

                <div id="img">
                    <img className="mainImage" alt="Front Logo" src="/goatLogo.png" />
                </div>
            </div>

            <div id="boxAnim" />

            <ProjectDetails />
        </>
    )
}

export default LangButtons;
