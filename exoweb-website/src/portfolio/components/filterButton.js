function FilterButton({ filterButton, filter })
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
        <div>
            <h2>
                {
                    filterButton.map((category, index) => 
                    {
                        return <span className="lang-button" style={{ "color": checkColour(category) }} data-panel={category}
                            type="filterbutton" onClick={() => filter(category)}>
                            {category === "others" ?
                                <>
                                    <span style={{"color" : "#ffffff"}}>and&nbsp;</span>
                                    {checkCategory(category)}
                                </>
                                :
                                <>
                                    {checkCategory(category)} &nbsp;
                                </>
                            }
                            <span className="underline" style={{ "backgroundColor": "#7750A9" }}></span>
                        </span>
                    })
                }
            </h2>
        </div>
    );
}

export default FilterButton;
