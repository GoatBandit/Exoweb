import Projects from "./projectHighlight"

const allLangFilter = [...new Set(Projects.map(item => item.langFilter))];
const languages =
    [
        "c#",
        "cpp",
        "kotlin",
        "golang",
        "reactjs",
        "javascript",
        "html/css",
        "wordpress"
    ]

function Filter({ categoryButton, filter })
{
    function checkColour(category)
    {
        if (category === "lang1")
        {
            return ("#7750A9")
        }
        else if (category === "lang2")
        {
            return ("#8A72BE")
        }
        else if (category === "lang3")
        {
            return ("#80D2E6")
        }
        else if (category === "lang4")
        {
            return ("#50BED2")
        }
        else if (category === "others")
        {
            return ("#f1ff71")
        }
        else
        {
            return ("#ffffff")
        }
    }

    function checkCategory(category)
    {
        if (category === "lang1")
        {
            return ("Game Development,")
        }
        else if (category === "lang2")
        {
            return ("Software Development,")
        }
        else if (category === "lang3")
        {
            return ("Web Development,")
        }
        else if (category === "lang4")
        {
            return ("Cloud")
        }
        else if (category === "others")
        {
            return ("others")
        }
        else
        {
            return ("All,")
        }
    }

    // const allLangFilter = Projects.map(item => item.langFilter);
    // var booleanArray = new Array(2).fill(false);

    function checkLanguage(index)
    {
        return
    }

    return (
        <div id="filter">
            <div>
                <h2>
                    {
                        categoryButton.map((category) => 
                        {
                            return <>
                                {category !== "others" ?
                                    category !== "all" ?
                                        <>
                                            <span>&nbsp;</span>
                                            <span className="lang-button" style={{ "color": checkColour(category) }} data-panel={category}
                                                type="filterbutton" onClick={() => filter(category, "title")}>
                                                {checkCategory(category)}
                                            </span>
                                        </>
                                        :
                                        <span className="lang-button" style={{ "color": checkColour(category) }} data-panel={category}
                                            type="filterbutton" onClick={() => filter(category, "title")}>
                                            {checkCategory(category)}
                                        </span>

                                    :
                                    <>
                                        &nbsp;and&nbsp;
                                        <span className="lang-button" style={{ "color": checkColour(category) }} data-panel={category}
                                            type="filterbutton" onClick={() => filter(category, "title")}>
                                            {checkCategory(category)}
                                        </span>
                                    </>
                                }
                            </>
                        })
                    }
                </h2>
            </div>
            <div style={{ "fontSize": "larger" }}>I work with the following languages:</div>
            <p style={{ "fontSize": "larger" }}>
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage"
                    type="filterbutton">
                    C#
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage"
                    type="filterbutton">
                    C++
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage"
                    type="filterbutton">
                    Kotlin
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage"
                    type="filterbutton">
                    Go
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage"
                    type="filterbutton">
                    ReactJS
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage"
                    type="filterbutton">
                    JavaScript
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage"
                    type="filterbutton">
                    HTML/CSS
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage"
                    type="filterbutton">
                    Wordpress
                </span>.
            </p>

            {/* <p>
                Please click on the desired filter.
            </p> */}
        </div >
    );
}

export default Filter
