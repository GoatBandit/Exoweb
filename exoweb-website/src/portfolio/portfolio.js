import "./portfolioCSS.css";
// import "./scripts/portfolioIntro"
// import "./scripts/portfolioMain"
// import "./scripts/portfolioProjectDetails"

function Portfolio()
{
    return (
        <>
            <div id="container">
                <div id="Header">
                    {/* <h1 id="intro">{GOATBANDIT}</h1> */}
                    <div id="main">
                        <h2>I'm a software developer that works on</h2>
                        <h2>
                            <span class="lang-button" style={{ "color": "#7750A9" }} data-panel="lang1">
                                Game Development
                                <span class="underline" style={{ "background-color": "#7750A9" }}></span>
                            </span>,
                            <span class="lang-button" style={{ "color": "#8A72BE" }} data-panel="lang2">
                                Software Development
                                <span class="underline" style={{ "background-color": "#8A72BE" }}></span>
                            </span>,
                            <span class="lang-button" style={{ "color": "#80D2E6" }} data-panel="lang3">
                                Web Development
                                <span class="underline" style={{ "background-color": "#80D2E6" }}></span>
                            </span>,
                            <span class="lang-button" style={{ "color": "#50BED2" }} data-panel="lang4">
                                Cloud
                                <span class="underline" style={{ "background-color": "#50BED2" }}></span>
                            </span>,
                            and
                            <span class="lang-button" style={{ "color": "#f1ff71" }} data-panel="others">
                                others
                                <span class="underline" style={{ "background-color": "#f1ff71" }}></span>
                            </span>.
                        </h2>


                        <p style={{ "font-size": "larger" }}>
                            <span class="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                                C#
                                <span class="underline" style={{ "background-color": "#d87777" }}></span>
                            </span>,
                            <span class="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                                C++
                                <span class="underline" style={{ "background-color": "#d87777" }}></span>
                            </span>,
                            <span class="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                                Kotlin
                                <span class="underline" style={{ "background-color": "#d87777" }}></span>
                            </span>,
                            <span class="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                                Go
                                <span class="underline" style={{ "background-color": "#d87777" }}></span>
                            </span>,
                            <span class="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                                JavaScript
                                <span class="underline" style={{ "background-color": "#d87777" }}></span>
                            </span>,
                            <span class="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                                ReactJS
                                <span class="underline" style={{ "background-color": "#d87777" }}></span>
                            </span>,
                            <span class="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                                HTML5
                                <span class="underline" style={{ "background-color": "#d87777" }}></span>
                            </span>,
                            <span class="lang-button" style={{ "color": " #d87777" }} data-panel="specificLanguage">
                                CSS
                                <span class="underline" style={{ "background-color": "#d87777" }}></span>
                            </span>,
                        </p>


                        <p>
                            Please click on the item you would like to see.
                        </p>

                        <div class="copyright">
                            <p>
                                &copy; Connor Easterbrook
                            </p>
                            <div data-project="Credits" class="proj">
                                <button class="credit">
                                    <span>Credit</span>
                                </button>
                            </div>
                        </div>

                        <div id="details">
                            <img class="mainImage" alt="Front Logo" src="/assets/images/goatLogo.png" />
                        </div>
                    </div>
                </div>

                <div id="boxAnim">
                </div>



                <div id="lang1" class="lang-panel">
                    <h2>Game Development</h2>
                    <h3 class="lang-desc">
                        <span>Game Development</span> was the starting area of my programming experience and my degree is based
                        around it.
                        <span>Games</span> will always remain a core part of my life and I find enjoyment from
                        <span>creating</span> all aspects of video games.
                    </h3>

                    <div class="projects lang1" data-cat="lang2">

                        <div data-project="Not Mario" class="proj" id="notMario">
                            <h3>Not Mario</h3>
                            <p>ASGE (OpenGL) | C++</p>
                            <span class="text">
                                <h2>OOP, Memory management</h2>
                            </span>
                        </div>

                        <div data-project="Biohazard" class="proj" id="biohazard">
                            <h3>Biohazard</h3>
                            <p>ASGE (OpenGL) | C++</p>
                            <span class="text">
                                <h2>OOP, Networking, Data serialization, Threading</h2>
                            </span>
                        </div>

                        <div data-project="Observers" class="proj" id="observers">
                            <h3>Observers</h3>
                            <p>ASGE (OpenGL) | C++</p>
                            <span class="text">
                                <h2>OOP, Memory management, Stack-based states</h2>
                            </span>
                        </div>

                    </div>
                </div>

                <div id="lang2" class="lang-panel">
                    <h2>Software Development</h2>
                    <h3 class="lang-desc">
                        <span>Software Development</span> is very fulfilling for me as it allows us to <span>create
                            experiences</span> that can improve someone's life.
                        While I do not have much experience with <span>software development</span>, I still find myself wanting
                        to deconstruct applications to see
                        how the developers created it.
                    </h3>

                    <div class="projects lang2" data-cat="lang2">

                        <div data-project="Landmass Generator" class="proj"
                            style={{ "background-image" : "url(/assets/images/portfolio/software/landmass_generator.JPG)" }}>
                            <h3>Landmass Generator</h3>
                            <p>Unity | C#</p>
                            <span class="text">
                                <h2>~</h2>
                            </span>
                        </div>

                        <div data-project="Plandit" class="proj" style={{ "background-image" : "url(/assets/images/goatLogo.png)" }}>
                            <h3>Plandit</h3>
                            <p>(Hand Coded)</p>
                            <span class="text">
                                <h2>React JS</h2>
                            </span>
                        </div>

                    </div>
                </div>

                <div id="lang3" class="lang-panel">
                    <h2>Web Development</h2>
                    <h3 class="lang-desc">
                        <span>Web development</span>, is an area I really enjoy working in.
                        I'm always excited to expand my portfolio with a new front-end or back-end additions.
                    </h3>

                    <div class="projects lang3" data-cat="lang3">

                        <div data-project="Bandit" class="proj" style={{ "background-image" : "url(/assets/images/portfolio/web/bandit_invoice.JPG)", "background-position" : "left" }}>
                            <h3>Bandit</h3>
                            <p>ReactJS / HTML5 / CSS / JavaScript</p>
                            <span class="text">
                                <h2>~</h2>
                            </span>
                        </div>

                        <div data-project="Exoweb" class="proj"
                            style={{ "background-image" : "url(/assets/images/portfolio/thisWebsite.jpg)" }}>
                            <h3>Exoweb Website</h3>
                            <p>HTML5 / CSS / JavaScript / JQuery</p>
                            <span class="text">
                                <h2>Hosting Maintenance Editing</h2>
                            </span>
                        </div>

                        <div data-project="ASOT" class="proj"
                            style={{ "background-image" : "url(/assets/images/portfolio/web/ASOT_logo.jpg)" }}>
                            <h3>ASOT Property Services Website</h3>
                            <p>Wordpress</p>
                            <span class="text">
                                <h2>Hosting Maintenance Editing</h2>
                            </span>
                        </div>

                    </div>
                </div>

                <div id="lang4" class="lang-panel">
                    <h2>EXOWEB</h2>
                    <h3 class="lang-desc">
                        This section is dedicated to <span>EXOWEB</span>.
                        Specifically, this section would contain the <span>professional</span>, paid work executed by me for
                        Exoweb, my brand.
                    </h3>

                    <div class="projects lang4" data-cat="lang4">

                    </div>
                </div>

                <div id="others" class="lang-panel">
                    <h2>Other skills</h2>
                    <h3 class="lang-desc">
                        This area is for the projects that I have <span>created</span> that do not fit into the given
                        <span>four</span> categories.
                    </h3>

                    <div data-project="this" class="projects others" data-cat="others">

                        <div data-project="Non-Euclidean Project" class="proj"
                            style={{ "background-image" : "url(/assets/images/goatLogo.png)" }}>
                            <h3>Non-Euclidean Project</h3>
                            <p>Comprehensive Creative Technologies Project</p>
                            <span class="text">
                                <h2>~</h2>
                            </span>
                        </div>

                    </div>
                </div>

                <div id="specificLanguage" class="lang-panel">
                    <h2>Other skills</h2>
                    <h3 class="lang-desc">
                        This area is for the projects that I have <span>created</span> that do not fit into the given
                        <span>four</span> categories.
                    </h3>

                </div>

                <div id="textBox">
                    <h2 class="singleLine">asda</h2>
                    <p>dfgdfgfdgdf</p>
                    <button class="close" href="#"> &times; </button>
                    <img alt="" class="logo" src="/assets/images/icon.png" />

                    <a class="ref" target="_blank" href="sdf"><img alt="" src="/assets/images/gitHub.png" /></a>
                    <a class="youtube" target="_blank" href="sdf"><img alt="" src="/assets/images/gitHub.png" /></a>

                    <img alt="" id="tbimg" class="firstImage" src="/../images/icon.png" />
                    <img alt="" id="tbimg" class="secondImage" src="/../images/icon.png" />
                </div>


                <div id="bg"></div>

            </div>
        </>
    );
}

export default Portfolio;
