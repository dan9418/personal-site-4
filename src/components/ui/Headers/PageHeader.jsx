import * as React from "react";
import "./Headers.css";

const PageHeader = ({ text }) => {
    return (
        <h1 className='page-header'>
            {text}
        </h1>
    );
}

export default PageHeader;
