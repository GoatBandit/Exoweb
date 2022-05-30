import "./aboutCSS.css";

function About()
{
    // // On About Button Click
    // $('.aboutButton').click(function (e) 
    // {
    //     $('.about').fadeIn(500);
    //     $('.aboutEffect').removeClass('transform-out').addClass('transform-in');

    //     e.preventDefault();
    // });

    function openAbout()
    {
        const about = document.getElementsByClassName("about");
        const aboutEffect = document.getElementsByClassName("aboutEffect");
        console.log("f")

        about.fadeIn(500);
        aboutEffect.removeClass("transform-out").addClass("transform-in");
    }

    // // On About Button Close Click
    // $('.about .inner .close').click(function (e) 
    // {
    //     $('.about').fadeOut(500);
    //     $('.aboutEffect').removeClass('transform-in').addClass('transform-out');

    //     e.preventDefault();
    // });

    // // On Skills Button Click
    // $('.skillsButton').click(function (e) 
    // {
    //     $('.skills').fadeIn(500);
    //     $('.skillsEffect').removeClass('transform-out').addClass('transform-in');

    //     e.preventDefault();
    // });

    // // On Skills Button Close Click
    // $('.skills .inner .close').click(function (e) 
    // {
    //     $('.skills').fadeOut(500);
    //     $('.skillsEffect').removeClass('transform-in').addClass('transform-out');

    //     e.preventDefault();
    // });

    // // On Work Button Click
    // $('.thirdButton').click(function (e) 
    // {
    //     $('.store').fadeIn(500);
    //     $('.storeEffect').removeClass('transform-out').addClass('transform-in');

    //     e.preventDefault();
    // });

    // // On Work Button Close Click
    // $('.store .inner .close').click(function (e) 
    // {
    //     $('.store').fadeOut(500);
    //     $('.storeEffect').removeClass('transform-in').addClass('transform-out');

    //     e.preventDefault();
    // });

    // function updateProjectDivHeights() 
    // {
    //     for (let div of projectDivs) 
    //     {
    //         div.style.height = window.innerHeight - div.getBoundingClientRect().y - 30 + 'px';
    //     }

    //     for (let bar of scrollbars) 
    //     {
    //         bar.update();
    //     }
    // }

    // updateProjectDivHeights();

    return (
        <div id="aboutContainer">
            <div id="header">

                <div class="mainPic">
                    <img class="circleImage" alt="Front Image" src="/goatLogo.png" />
                    <div class="circleText">
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

                <div class="contentShell">
                    <div class="content">
                        <p>
                            I'm <strong>Connor Easterbrook</strong>, also known as <strong>GoatBandit</strong>.
                            <br /> Check out 'ABOUT' for more information!
                        </p>
                    </div>
                </div>

                <div class="buttons">
                    <li><a class="aboutButton" href="#">
                        <p>About</p>
                    </a></li>
                    <li><a class="skillsButton" href="#">
                        <p>Work</p>
                    </a></li>
                    <li><a class="thirdButton" href="#">
                        <p>EXOWEB</p>
                    </a></li>
                </div>
            </div>

            <div id="main" class="openSquish">
                <div class="mainText">
                    <div class="mainTextHelper">

                        <div class="about">
                            <div class="inner">
                                <div class="aboutEffect">
                                    <h2 class="major"> About Me </h2>
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
                                    <a class="close" href="#"> &times; </a>
                                </div>
                            </div>
                        </div>

                        <div class="skills">
                            <div class="inner">
                                <div class="skillsEffect">
                                    <h2 class="major"> Work & Skills </h2>
                                    <p>
                                        My CV details my employment and educational background while my Portfolio discusses
                                        my published work. <br /><br />
                                        Please click the button below for your desired documententation:
                                    </p>
                                    <button class="cvButton" onclick="window.open('/assets/documents/cv/cv.pdf')"> CV
                                    </button>
                                    <button class="resumeButton" onclick="window.open('/portfolio')"> Portfolio </button>
                                    <a class="close" href="#"> &times; </a>
                                </div>
                            </div>
                        </div>

                        <div class="store">
                            <div class="inner">
                                <div class="storeEffect">
                                    <h2 class="major"> EXOWEB </h2>
                                    <p>
                                        EXOWEB is my company. <br />
                                        Click the button below for more information.
                                    </p>
                                    <button class="storeButton" onclick="window.open('index')"> EXOWEB </button>
                                    <a class="close" href="#"> &times; </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div id="footer">
                <div class="copyright">
                    <p>
                        &copy; Connor Easterbrook
                    </p>
                </div>
            </div>

            <div id="bg" class="slowFadeIn">
                <ul class="circles">
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
