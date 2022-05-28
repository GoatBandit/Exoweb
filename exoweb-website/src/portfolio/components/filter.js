function Filter({ filterButton, filter })
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

    return (
        <div id="filter">
            <div>
                <h2>
                    {
                        filterButton.map((category, index) => 
                        {
                            return <>
                                {category !== "others" ?
                                    category !== "all" ?
                                        <>
                                            <span>&nbsp;</span>
                                            <span className="lang-button" style={{ "color": checkColour(category) }} data-panel={category}
                                                type="filterbutton" onClick={() => filter(category)}>
                                                {checkCategory(category)}
                                            </span>
                                        </>
                                        :
                                        <span className="lang-button" style={{ "color": checkColour(category) }} data-panel={category}
                                            type="filterbutton" onClick={() => filter(category)}>
                                            {checkCategory(category)}
                                        </span>

                                    :
                                    <>
                                        &nbsp;and&nbsp;
                                        <span className="lang-button" style={{ "color": checkColour(category) }} data-panel={category}
                                            type="filterbutton" onClick={() => filter(category)}>
                                            {checkCategory(category)}
                                        </span>
                                    </>
                                }
                            </>
                        })
                    }
                </h2>
            </div>
            <p style={{ "fontSize": "larger" }}>
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    C#
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    C++
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    Kotlin
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    Go
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    ReactJS
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    JavaScript
                </span>,&nbsp;
                <span className="lang-button" style={{ "color": "#d87777" }} data-panel="specificLanguage">
                    HTML/CSS
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
