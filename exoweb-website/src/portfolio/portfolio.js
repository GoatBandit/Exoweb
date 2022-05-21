import "./portfolioCSS.css";
import Introduction from "./components/introduction";
import LangButtons from "./components/langButtons";

function Portfolio()
{
    return (
        <>
            <div id="container">
                <Introduction />
                <div id="Portfolio">
                    <LangButtons />
                </div>
                <div id="bg"></div>

            </div>
        </>
    );
}

export default Portfolio;
