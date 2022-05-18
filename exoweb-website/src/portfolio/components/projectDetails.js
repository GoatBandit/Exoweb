import ProjectHighlight from "./projectHighlight";

function ProjectDetails({ textBox })
{
    function closeButton()
    {
        textBox.classList.remove('shown');
    }

    return (
        <>
            <div id="textBox">
                <h2 className="singleLine">asda</h2>
                <p>dfgdfgfdgdf</p>
                <button className="close" href="#" onClick={closeButton}> &times; </button>
                <img alt="" className="logo" src="/assets/images/icon.png" />

                <a className="ref" target="_blank" href="sdf"><img alt="" src="/assets/images/gitHub.png" /></a>
                <a className="youtube" target="_blank" href="sdf"><img alt="" src="/assets/images/gitHub.png" /></a>

                <img alt="" id="tbimg" className="firstImage" src="/../images/icon.png" />
                <img alt="" id="tbimg" className="secondImage" src="/../images/icon.png" />
            </div>

            <ProjectHighlight />
        </>
    );
}

export default ProjectDetails;
