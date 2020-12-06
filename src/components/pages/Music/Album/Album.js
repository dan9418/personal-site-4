import * as React from "react";
import SectionSubheader from "../../../ui/Headers/SectionSubheader";
import IconList from "../../../ui/IconList/IconList";
import "./Album.css";

const getAlbumTracks = (trackDefs) => {
	let tracks = [];
	for (let i = 0; i < trackDefs.length; i++) {
		let track = trackDefs[i];
		tracks.push(<li key={i}>{track.title}<span className='album-note'>{track.note}</span></li>)
	}
	return <ol>{tracks}</ol>;
};

const Album = ({ title, year, summary, art, icons, tracks }) => {
	return (
		<div className='album'>
			<SectionSubheader
				text={`${title} (${year})`}
				rightAction={<IconList icons={icons} />}
			/>
			<p>{summary}</p>
			<div className='album-content'>
				<img src={art.path} alt={art.name} />
				{getAlbumTracks(tracks)}
			</div>
		</div>
	);
};

export default Album;
