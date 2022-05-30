import React, { useState, useEffect } from "react";
import "../portfolioCSS.css";
import Filter from "./filter.js"
import Projects from "./projectHighlight.js"
import ProjectDetails from "./projectDetails.js";

/* 
* Primary project sorting categories
* Linked to langButtons:20
*/
const allCategories =
    [
        "all",
        ...new Set(Projects.map(item => item.category))
    ];

function LangButtons()
{
    // Variables used for sorting projects
    const [menuItem, setMenuItem] = useState(Projects);
    const [categoryButtons, setCategoryButtons] = useState(allCategories);

    // Filter projects based on the object pressed
    const filterMenu = (button, type) =>
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

    /* 
    * Open up additional information about projects.
    * Linked to langButtons:59 
    */
    // function showProjectText(event)
    // {
    //     const textBox = document.getElementById('textBox'); // For button information
    //     textBox.classList.add('shown');
    //     textBox.openingElement = event.target;
    // }

    return (
        <>
            <div id="Header">
                <div id="Start">
                    <h2>I'm a software developer that works on</h2>

                    <Filter
                        categoryButton={categoryButtons}
                        filter={filterMenu}
                    />

                    <div id="details">
                        <div className="table">
                            {
                                menuItem.map((item) =>
                                {
                                    return <div className="item-con" id={item.category} key={item.id}>
                                        {/* onClick={showProjectText}> */}
                                        <div className="item-container" data-cat={item.category}>
                                            <img src={item.firstImage} alt=""
                                                onMouseEnter={e => (e.currentTarget.src = item.secondImage)}
                                                onMouseLeave={e => (e.currentTarget.src = item.firstImage)} />
                                            <div className="tip">{item.languages}</div>
                                            <div className="tip">{item.skills}</div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            {item.github && (
                                                <a className="ref" href={item.github} target={item.github}>{item.linkName}</a>
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
