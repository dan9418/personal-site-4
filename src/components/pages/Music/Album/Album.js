import * as React from "react";
import SectionSubheader from "../../../ui/Headers/SectionSubheader";
import IconList from "../../../ui/IconList/IconList";
import "./Album.css";

const getAlbumTracks = (trackDefs) => {
	let tracks = [];
	for (let i = 0; i < trackDefs.length; i++) {
		let track = trackDefs[i];
		tracks.push(<li className='album-track' key={i}>{track.title}<span className='album-track-note'>{track.note}</span></li>)
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
			<p className='album-summary'>{summary}</p>
			<div className='album-content'>
				<div className='album-art-container'>
					<img className='album-art' src={art.path} alt={art.name} />
				</div>
				<div className='album-tracklist'>{getAlbumTracks(tracks)}</div>
			</div>
		</div>
	);
};

export default Album;
