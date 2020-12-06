import * as React from "react";
import "./Headers.css";

const SectionSubheader = ({ text, rightAction, level }) => {
    let Heading = `h${level || 3}`;
    return (
        <Heading className='section-subheader'>
            {text}
            {rightAction}
        </Heading>
    );
}

export default SectionSubheader;
