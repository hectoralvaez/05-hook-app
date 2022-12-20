import { useState, useRef, useLayoutEffect } from "react";

export const Quote = ({ author, quote }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });


    useLayoutEffect(() => {
        console.log( pRef.current.getBoundingClientRect() );

        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [quote]);

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
                >
                <p ref={ pRef }>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            <code>{ JSON.stringify(boxSize) }</code>
        </>
    );
};