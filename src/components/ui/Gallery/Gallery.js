import * as React from "react";
import "./Gallery.css";
import { useState } from "react";
import ICON from "../Icon";

const navigateGallery = (setIndex, current, distance, max) => {
	let newIndex = (current + distance) % max;
	if (newIndex < 0) newIndex = newIndex + max;
	setIndex(newIndex);
}

const Gallery = (props) => {

	const [index, setIndex] = useState(0);
	const main = props.images[index];

	return (
		<div className='gallery'>
			<label>
				<span className='name'>{main.name}</span>
				<span className='year'>{main.year && ` (${main.year})`}</span>
			</label>
			<div className='middle'>
				<button type='button' onClick={() => navigateGallery(setIndex, index, -1, props.images.length)}>{ICON.navLeft}</button>
				<img className='gallery-image' src={main.path} alt={main.name} />
				<button type='button' onClick={() => navigateGallery(setIndex, index, 1, props.images.length)}>{ICON.navRight}</button>
			</div>
			<label>{` [${(index + 1)}/${props.images.length}]`}</label>
		</div>
	);
}

export default Gallery;
