import React from 'react';
import { useState, useEffect } from 'react';

const typeItOut = ({ string = "", speed = 1000 }) =>
{
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState("");

    useEffect(() =>
    {
        const animKey = setInterval(() =>
        {
            setIndex((index) =>
            {
                if (index >= content.length - 1)
                {
                    clearInterval(animKey);
                    return index;
                }

                return index + 1;
            });
        }, speed);
    }, []);

    useEffect(() =>
    {
        setDisplayedContent((displayedContent) => displayedContent + content[index])
    }, [index]);
}