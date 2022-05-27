import FilterButton from "./filterButton";

function Filter()
{
    return (
        <div id="filter">
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

            {/* <FilterButton /> */}
        </div>
    );
}

export default Filter
