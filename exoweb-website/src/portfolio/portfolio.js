import LangButtons from "./components/langButtons";
import "./portfolioCSS.css";
// import "./scripts/portfolioIntro"
// import "./scripts/portfolioMain";
// import "./scripts/portfolioProjectDetails"

function Portfolio()
{
    return (
        <>
            <div id="container">
                <LangButtons />

                <div id="boxAnim">
                </div>

                <div id="lang1" className="lang-panel">
                    <h2>Game Development</h2>
                    <h3 className="lang-desc">
                        <span>Game Development</span> was the starting area of my programming experience and my degree is based
                        around it.
                        <span>Games</span> will always remain a core part of my life and I find enjoyment from
                        <span>creating</span> all aspects of video games.
                    </h3>

                    <div className="projects lang1" data-cat="lang2">

                        <div data-project="Not Mario" className="proj" id="notMario">
                            <h3>Not Mario</h3>
                            <p>ASGE (OpenGL) | C++</p>
                            <span className="text">
                                <h2>OOP, Memory management</h2>
                            </span>
                        </div>

                        <div data-project="Biohazard" className="proj" id="biohazard">
                            <h3>Biohazard</h3>
                            <p>ASGE (OpenGL) | C++</p>
                            <span className="text">
                                <h2>OOP, Networking, Data serialization, Threading</h2>
                            </span>
                        </div>

                        <div data-project="Observers" className="proj" id="observers">
                            <h3>Observers</h3>
                            <p>ASGE (OpenGL) | C++</p>
                            <span className="text">
                                <h2>OOP, Memory management, Stack-based states</h2>
                            </span>
                        </div>

                    </div>
                </div>

                <div id="lang2" className="lang-panel">
                    <h2>Software Development</h2>
                    <h3 className="lang-desc">
                        <span>Software Development</span> is very fulfilling for me as it allows us to <span>create
                            experiences</span> that can improve someone's life.
                        While I do not have much experience with <span>software development</span>, I still find myself wanting
                        to deconstruct applications to see
                        how the developers created it.
                    </h3>

                    <div className="projects lang2" data-cat="lang2">

                        <div data-project="Landmass Generator" className="proj"
                            style={{ "backgroundImage": "url(/assets/images/portfolio/software/landmass_generator.JPG)" }}>
                            <h3>Landmass Generator</h3>
                            <p>Unity | C#</p>
                            <span className="text">
                                <h2>~</h2>
                            </span>
                        </div>

                        <div data-project="Plandit" className="proj" style={{ "backgroundImage": "url(/assets/images/goatLogo.png)" }}>
                            <h3>Plandit</h3>
                            <p>(Hand Coded)</p>
                            <span className="text">
                                <h2>React JS</h2>
                            </span>
                        </div>

                    </div>
                </div>

                <div id="lang3" className="lang-panel">
                    <h2>Web Development</h2>
                    <h3 className="lang-desc">
                        <span>Web development</span>, is an area I really enjoy working in.
                        I'm always excited to expand my portfolio with a new front-end or back-end additions.
                    </h3>

                    <div className="projects lang3" data-cat="lang3">

                        <div data-project="Bandit" className="proj" style={{ "backgroundImage": "url(/assets/images/portfolio/web/bandit_invoice.JPG)", "backgroundPosition": "left" }}>
                            <h3>Bandit</h3>
                            <p>ReactJS / HTML5 / CSS / JavaScript</p>
                            <span className="text">
                                <h2>~</h2>
                            </span>
                        </div>

                        <div data-project="Exoweb" className="proj"
                            style={{ "backgroundImage": "url(/assets/images/portfolio/thisWebsite.jpg)" }}>
                            <h3>Exoweb Website</h3>
                            <p>HTML5 / CSS / JavaScript / JQuery</p>
                            <span className="text">
                                <h2>Hosting Maintenance Editing</h2>
                            </span>
                        </div>

                        <div data-project="ASOT" className="proj"
                            style={{ "backgroundImage": "url(/assets/images/portfolio/web/ASOT_logo.jpg)" }}>
                            <h3>ASOT Property Services Website</h3>
                            <p>Wordpress</p>
                            <span className="text">
                                <h2>Hosting Maintenance Editing</h2>
                            </span>
                        </div>

                    </div>
                </div>

                <div id="lang4" className="lang-panel">
                    <h2>EXOWEB</h2>
                    <h3 className="lang-desc">
                        This section is dedicated to <span>EXOWEB</span>.
                        Specifically, this section would contain the <span>professional</span>, paid work executed by me for
                        Exoweb, my brand.
                    </h3>

                    <div className="projects lang4" data-cat="lang4">

                    </div>
                </div>

                <div id="others" className="lang-panel">
                    <h2>Other skills</h2>
                    <h3 className="lang-desc">
                        This area is for the projects that I have <span>created</span> that do not fit into the given
                        <span>four</span> categories.
                    </h3>

                    <div data-project="this" className="projects others" data-cat="others">

                        <div data-project="Non-Euclidean Project" className="proj"
                            style={{ "backgroundImage": "url(/assets/images/goatLogo.png)" }}>
                            <h3>Non-Euclidean Project</h3>
                            <p>Comprehensive Creative Technologies Project</p>
                            <span className="text">
                                <h2>~</h2>
                            </span>
                        </div>

                    </div>
                </div>

                <div id="specificLanguage" className="lang-panel">
                    <h2>Other skills</h2>
                    <h3 className="lang-desc">
                        This area is for the projects that I have <span>created</span> that do not fit into the given
                        <span>four</span> categories.
                    </h3>
                </div>

                <div id="textBox">
                    <h2 className="singleLine">asda</h2>
                    <p>dfgdfgfdgdf</p>
                    <button className="close" href="#"> &times; </button>
                    <img alt="" className="logo" src="/assets/images/icon.png" />

                    <a className="ref" target="_blank" href="sdf"><img alt="" src="/assets/images/gitHub.png" /></a>
                    <a className="youtube" target="_blank" href="sdf"><img alt="" src="/assets/images/gitHub.png" /></a>

                    <img alt="" id="tbimg" className="firstImage" src="/../images/icon.png" />
                    <img alt="" id="tbimg" className="secondImage" src="/../images/icon.png" />
                </div>


                <div id="bg"></div>

            </div>
        </>
    );
}

export default Portfolio;
