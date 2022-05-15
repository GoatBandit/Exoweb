import Introduction from "./introduction";

let openLang = false;
let currentEl = null;
const languageButtons = document.querySelectorAll(".lang-button"); // Language buttons
const mainIMG = document.querySelector('#details'); // For language large box animation
const textBox = document.querySelector('#textBox'); // For button information

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

function LangButtons()
{
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
        </>
    );
}

export default LangButtons;
