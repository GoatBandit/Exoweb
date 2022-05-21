import React, { useState } from "react";
import data from "./highlight.json";

function ProjectDetails()
{
    const details = useState(data);
    const textBox = document.querySelector("#textBox"); // For button information

    function closeButton()
    {
        textBox.classList.remove('shown');
    }

    return (
        <div id="textBox">
            {details.map((detail) => (
                <div key="hold">
                    <h2 className="singleLine" key="title">{detail.title}</h2>
                    <p key="desc">{detail.description}</p>
                    <button className="close" href="#" onClick={textBox.classList.remove("shown")} key="close"> &times; </button>
                    <img alt="" className="logo" src="/assets/images/icon.png" key="logo" />

                    <a className="ref" target="_blank" href={detail.github} key="ref"><img alt="" src={detail.github} /></a>
                    {/* <a className="youtube" target="_blank" href="sdf"><img alt="" src="/assets/images/gitHub.png" /></a> */}

                    <img alt="" id="tbimg" className="firstImage" src={detail.firstImage} key="img1" />
                    <img alt="" id="tbimg" className="secondImage" src={detail.secondImage} key="img2" />
                </div>
            ))}
        </div>
    );
}

export default ProjectDetails;
