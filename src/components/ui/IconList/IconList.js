import * as React from "react";
import ICON from "../Icon";
import "./IconList.css";

const IconList = ({ icons }) => {
	if (!icons || !icons.length) return null;
	return (
		<div className='icon-list'>
			{icons.map(icon => (
				<a key={icon.id} href={icon.href} alt={icon.name} target='_blank' rel='noopener noreferrer'>
					{ICON[icon.id]}
				</a>
			))}
		</div>
	);
}

export default IconList;
