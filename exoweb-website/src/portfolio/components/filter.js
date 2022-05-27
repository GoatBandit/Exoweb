function Filter()
{

    return (
        <div id="filter">
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
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    Kotlin
                    <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    Go
                    <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    ReactJS
                    <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    JavaScript
                    <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    HTML/CSS
                    <span className="underline" style={{ "backgroundColor": "#d87777" }}></span>
                </span>.
            </p>

            <p>
                Please click on the desired filter.
            </p>
        </div>
    );
}

export default Filter
