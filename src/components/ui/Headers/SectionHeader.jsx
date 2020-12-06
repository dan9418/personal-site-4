import * as React from "react";
import "./Headers.css";

const SectionHeader = ({ text, rightAction }) => {
    return (
        <h2 className='section-header'>
            {text}
            {rightAction}
        </h2>
    );
}

export default SectionHeader;
