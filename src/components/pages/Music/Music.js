import * as React from "react";
import SectionHeader from "../../ui/Headers/SectionHeader";
import IconList from "../../ui/IconList/IconList";
import Album from "./Album/Album";
import MUSIC_CONFIG from "./Music.config";
import "./Music.css";

const getAlbums = albums => albums.map(album => <Album key={album.title} {...album} />);

const getCategories = (categoryDefs) => {
	let categories = [];
	for (let i = 0; i < categoryDefs.length; i++) {
		let category = categoryDefs[i];
		categories.push(
			<div className="category" key={category.name + i}>
				<SectionHeader
					text={category.name}
					rightAction={<IconList icons={category.icons} />}
				/>
				<p>{category.description}</p>
				{getAlbums(category.albums)}
			</div>

		);
	}
	return categories;
};

const Music = () => {
	return (
		<div>
			<p>
				Music is one of my greatest passions - I love experimenting with new instruments, genres, sounds, and production techniques.
				Most of my music is guitar-based, but I also play some bass, drums, piano, and trombone.
			</p>

			<p>
				Beyond performing, I'm extremely interested in audio engineering, especially the creative use of unconventional sounds and textures in music.
				While a student, I studied and recorded in Pitt's Music Engineering Laboratory.
				I now have a modest home studio for recording myself and friends.
			</p>

			{getCategories(MUSIC_CONFIG)}
		</div>
	);
};

export default Music;
