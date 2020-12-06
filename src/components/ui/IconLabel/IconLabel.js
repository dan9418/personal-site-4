import * as React from "react";
import ICON from "../Icon";
import "./IconLabel.css";

const IconLabel = ({ text, id }) => {
	return (
		<div className='icon-label'>
			{ICON[id]}
			{text}
		</div>
	);
}

export default IconLabel;
