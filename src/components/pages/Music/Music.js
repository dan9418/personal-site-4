import * as React from "react";
import SectionHeader from "../../ui/Headers/SectionHeader";
import SectionSubheader from "../../ui/Headers/SectionSubheader";
import IconList from "../../ui/IconList/IconList";
import Album from "./Album/Album";
import "./Music.css";

const ALBUM_CONFIG = [
	{
		name: 'Atlas Euphoria',
		description: `Atlas Euphoria is the moniker I use for my solo material, which incorporates elements of indie rock, folk, and jazz. My first two projects are available for free streaming and plenty more are in the works.`,
		icons: [
			{
				name: 'Bandcamp',
				id: 'bandcamp',
				href: 'https://atlaseuphoria.bandcamp.com/'
			},
			{
				name: 'Instagram',
				id: 'instagram',
				href: 'https://www.instagram.com/atlaseuphoria/'
			},
			{
				name: 'Facebook',
				id: 'facebook',
				href: 'https://www.facebook.com/AtlasEuphoria'
			},
			{
				name: 'YouTube',
				id: 'youtube',
				href: 'https://www.youtube.com/channel/UCyq0-Fr2jM-GrbTB-SKOSkA'
			}
		],
		albums: [
			{
				title: 'Need Not',
				year: 2018,
				tracks: [
					{ title: 'Until Today' },
					{ title: 'Feel Something' },
					{ title: 'Nature vs Nature' },
					{ title: 'Small World' }
				],
				summary: 'A simple acoustic project to help me find my voice, literally and figuratively.',
				icons: [
					{ name: 'Bandcamp', id: 'bandcamp', href: 'https://atlaseuphoria.bandcamp.com/album/need-not' },
					{ name: 'Lyrics', id: 'lyrics', href: './assets/txt/need_not.txt' }
				],
				art: { path: './assets/img/albums/need_not.jpg', name: 'Need Not album cover' }
			},
			{
				title: 'Silent City',
				year: 2017,
				tracks: [
					{ title: 'Earthquake Day' },
					{ title: 'Clarity' },
					{ title: 'Momentum' },
					{ title: 'America Incorporated' },
					{ title: 'Dysphoria' },
					{ title: 'Reality Cruising' },
					{ title: 'Amnesiac' },
					{ title: 'The Optimist' },
					{ title: 'Silent Spring' },
					{ title: 'Looper' }
				],
				summary: 'My first proper album, an experimental indie rock project exploring themes of environmentalism and self-discovery.',
				icons: [
					{ name: 'Bandcamp', id: 'bandcamp', href: 'https://atlaseuphoria.bandcamp.com/album/silent-city' },
					{ name: 'SoundCloud', id: 'soundcloud', href: 'https://soundcloud.com/atlaseuphoria/sets/silent-city' },
					{ name: 'YouTube', id: 'youtube', href: 'https://www.youtube.com/watch?v=BdZc8xkQArw&feature=youtu.be' },
					{ name: 'Lyrics', id: 'lyrics', href: './assets/txt/silent_city.txt' }
				],
				art: { path: './assets/img/albums/silent_city.jpg', name: 'Silent City album cover' }
			}
		],
	},
	{
		name: 'The Vectors',
		description: `The Vectors were my dormroom ska band in college.`,
		icons: [
			{
				name: 'SoundCloud',
				id: 'soundcloud',
				href: 'https://soundcloud.com/livingfiction/'
			},
			{
				name: 'Facebook',
				id: 'facebook',
				href: 'https://www.facebook.com/TheVectors14'
			},
			{
				name: 'YouTube',
				id: 'youtube',
				href: 'https://www.youtube.com/channel/UCVJVbOg-thDA-qI4L_fHfdg'
			}
		],
		albums: [
			{
				title: 'Peanut Butter Jam',
				year: 2017,
				tracks: [
					{ title: 'Peanut Butter Jam' }
				],
				summary: 'A one-off single (produced by Daniel Blake and Jonathan Pushkar)',
				icons: [
					{ name: 'SoundCloud', id: 'soundcloud', href: 'https://soundcloud.com/livingfiction/peanut-butter-jam' },
					{ name: 'Lyrics', id: 'lyrics', href: './assets/txt/peanut_butter_jam.txt' }
				],
				art: { path: './assets/img/albums/peanut_butter_jam.jpg', name: 'Peanut Butter Jam album cover' }
			},
			{
				title: 'Songs; And How NOT To Write Them!',
				year: 2015,
				tracks: [
					{ title: 'Revolution: Day One' },
					{ title: 'Bob', note: '(NOFX cover)' },
					{ title: 'Revenge of the Pink Flamingo' },
					{ title: 'I Melt With You', note: '(Modern English cover)' },
					{ title: 'No Direction' },
					{ title: 'tourette\'s', note: '(Nirvana cover)' },
					{ title: 'Sell Out', note: '(Reel Big Fish cover)' },
					{ title: 'Just Another' },
					{ title: 'Walking The Plank' },
					{ title: 'New Girl', note: '(The Suicide Machines cover)' },
					{ title: 'Cartoon Chase Scene' },
					{ title: 'Blue Moon', note: '(The Marcels cover)' },
					{ title: 'The Wave Equation' },
					{ title: 'What I Got', note: '(Sublime cover)' },
					{ title: 'Requiem For Third Wave Ska' }
				],
				summary: 'A low-budget ska-punk album poking fun at 50\'s tropes and paying homage to our heroes.',
				icons: [
					{ name: 'SoundCloud', id: 'soundcloud', href: 'https://soundcloud.com/livingfiction/sets/songs-and-how-not-to-write-them' },
					{ name: 'YouTube', id: 'youtube', href: 'https://www.youtube.com/watch?v=WDdDrvqkbOk&list=PLF0EOAvsOKeCp_HowkIF6CVeExxuDXYRm' },
					{ name: 'Lyrics', id: 'lyrics', href: './assets/txt/songs_and_how_not_to_write_them.txt' }
				],
				art: { path: './assets/img/albums/songs_and_how_not_to_write_them.jpg', name: 'Songs; And How NOT To Write Them! album cover' }
			},
			{
				title: 'Yellow Snow',
				year: 2015,
				tracks: [
					{ title: `White Christmas`, note: '(Irving Berlin + The Drifters cover)' },
					{ title: `The Year That Flying Monkeys Saved Christmas` },
					{ title: `Randolph The Red-Headed Gingerbread Man` },
					{ title: `The Elf Who Wanted To Be A Dentist` },
					{ title: `Jingle Squeals` }
				],
				summary: 'A ridiculous EP to celebrate Christmas in July. Not to be taken seriously.',
				icons: [
					{ name: 'SoundCloud', id: 'soundcloud', href: 'https://soundcloud.com/livingfiction/sets/the-vectors-yellow-snow' },
					{ name: 'YouTube', id: 'youtube', href: 'https://www.youtube.com/watch?v=f2EV4bBB4E8&list=PLF0EOAvsOKeAv8CK8nJT1sRIGEK17w96s' },
					{ name: 'Lyrics', id: 'lyrics', href: './assets/txt/yellow_snow.txt' }
				],
				art: { path: './assets/img/albums/yellow_snow.jpg', name: 'Yellow Snow album cover' }
			}
		]
	},
	{
		name: 'Other Projects',
		description: 'A few old projects recorded just for fun.',
		albums: [
			{
				title: 'Human Architecture',
				year: 2017,
				tracks: [
					{ title: 'History Begins', note: '(Temperance)' },
					{ title: 'Collector', note: '(Lust)' },
					{ title: 'Constellations', note: '(Patience)' },
					{ title: 'New Idol', note: '(Averice)' },
					{ title: 'Tremors', note: '(Envy)' },
					{ title: 'In Valor & Venom', note: '(Wrath)' },
					{ title: 'Gyroscope', note: '(Kindness)' },
					{ title: 'Eyes Averted', note: '(Diligence)' },
					{ title: 'Fiend', note: '(Gluttony)' },
					{ title: 'Atrophy', note: '(Sloth)' },
					{ title: 'Waking Hours', note: '(Chastity)' },
					{ title: 'Seek Shelter', note: '(Charity)' },
					{ title: 'Architecture', note: '(Pride)' },
					{ title: 'Last Will', note: '(Humility)' }
				],
				summary: 'An experimental, instrumental, prog-rock concept album exploring the Seven Deadly Sins.',
				icons: [
					{ name: 'SoundCloud', id: 'soundcloud', href: 'https://soundcloud.com/atlaseuphoria/sets/human-architecture' },
					{ name: 'YouTube', id: 'youtube', href: 'https://www.youtube.com/watch?v=vzKuYdfCpdk' },
					{ name: 'Lyrics', id: 'lyrics', href: './assets/txt/human_architecture.txt' }
				],
				art: { path: './assets/img/albums/human_architecture.jpg', name: 'Human Architecture album cover' }
			},
			{
				title: 'Out Of Reach',
				year: 2011,
				tracks: [
					{ title: 'New Life' },
					{ title: 'Swift' },
					{ title: 'Pink Flamingo' },
					{ title: 'Exactly!' },
					{ title: 'Memento Mori' },
					{ title: 'In Loving Memory...', note: '(Tribute to Herbert Vargo III)' },
					{ title: 'Quicksand' },
					{ title: 'The Bullfighter' },
					{ title: 'Paperwork' },
					{ title: 'Resurrection' },
					{ title: 'Identity' },
					{ title: 'The Ballad of Billy Mays' },
					{ title: 'You Took Everything', note: '(An Interlude)' },
					{ title: 'Demolition' },
					{ title: 'The Marrow of a Bone' },
					{ title: 'Frail' },
					{ title: 'Temptation' },
					{ title: 'Release' },
					{ title: 'Execution' },
					{ title: 'Extrication' }
				],
				summary: 'My first album, an eclectic set of songs recorded during my sophomore year of high school.',
				icons: [
					{ name: 'SoundCloud', id: 'soundcloud', href: 'https://soundcloud.com/livingfiction/sets/out-of-reach' },
					{ name: 'YouTube', id: 'youtube', href: 'https://www.youtube.com/watch?v=mL2CbEXX6lo&list=PLF0EOAvsOKeDZnT4z2Z-tZaFzL0qVuk6f' },
					{ name: 'Lyrics', id: 'lyrics', href: './assets/txt/out_of_reach.txt' }
				],
				art: { path: './assets/img/albums/out_of_reach.jpg', name: 'Out Of Reach album cover' }
			}
		]
	}
];

const getAlbums = () => {
	let albums = [];
	for (let i = 0; i < ALBUM_CONFIG.length; i++) {
		let category = ALBUM_CONFIG[i];
		albums.push(
			<div className="album-container" key={category.name + i}>
				<SectionHeader
					text={category.name}
					rightAction={<IconList icons={category.icons} />}
				/>
				<p className='category-description'>{category.description}</p>
				{category.albums.map((album, index) => { return <Album key={album.title} {...album} />; })}
			</div>
		);
	}
	return albums;
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

			{getAlbums()}
		</div>
	);
};

export default Music;
