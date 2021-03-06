import React, { useEffect, useState } from "react";

function Introduction()
{
    const [introduced, setIntroduced] = useState(false);

    useEffect(() =>
    {
        if (!introduced)
        {
            let intro = document.querySelector('#intro');
            let anim =
                [
                    { t: "", ms: 400 },
                    { t: "|", ms: 400 },
                    { t: "", ms: 400 },
                    { t: "|", ms: 400 },
                    { t: "G|", ms: 75 },
                    { t: "Go|", ms: 75 },
                    { t: "Goa|", ms: 75 },
                    { t: "Goat|", ms: 75 },
                    { t: "GoatB|", ms: 75 },
                    { t: "GoatBa|", ms: 75 },
                    { t: "GoatBan|", ms: 75 },
                    { t: "GoatBand|", ms: 75 },
                    { t: "GoatBandi|", ms: 75 },
                    { t: "GoatBandit|", ms: 400 },
                    { t: "GoatBandit ", ms: 400 },
                    { t: "GoatBandit|", ms: 400 },
                    { t: "GoatBandit ", ms: 400 },
                ];

            let stepDenominator = 1;
            if (window.localStorage.stepDenominator)
            {
                stepDenominator = window.localStorage.stepDenominator;
            }

            let i = 0;
            let update = () => 
            {
                let step = anim[i];
                intro.innerText = step.t;
                i++;

                if (i < anim.length)
                {
                    setTimeout(update, step.ms / stepDenominator);
                }
                else 
                {
                    intro.classList.add('top');
                    setTimeout(() => 
                    {
                        document.getElementById('Portfolio').style.opacity = 1;
                    }, 500);

                    window.localStorage.stepDenominator = 2;
                }
            }
            update();

            setIntroduced(true);
        }
    }, [introduced])

    return (
        <div>
            <h1 id="intro">
                GOATBANDIT
            </h1>
        </div>
    );
}

export default Introduction;
