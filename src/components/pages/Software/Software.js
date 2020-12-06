import * as React from "react";
import Gallery from "../../ui/Gallery/Gallery";
import SectionHeader from "../../ui/Headers/SectionHeader";
import SectionSubheader from "../../ui/Headers/SectionSubheader";
import "./Software.css";

const Software = () => {

	return (
		<>
			<SectionHeader text="Web Apps" />

			<SectionSubheader text="Play What" />

			<p>
				Play What is a music modeling toolkit that I have been developing for several years.
				I am preparing to release the first major version in early 2021.
			</p>

			<p>
				The Play What engine is based on a series of models I devised to represent various musical ideas.
				The models are simple and flexible enough to serve as an efficient interchange format for musical conversions and transforms.
			</p>

			<p>
				When finished, the Play What suite will include:
			</p>

			<ul>
				<li>A simple, efficient, and flexible data structure specification</li>
				<li>A JavaScript API for working with these data structures</li>
				<li>An immutable object-oriented JavaScript framework to wrap these data structures</li>
				<li>A React component library for visualizing these data structures</li>
				<li>A free web app demonstrating the library's abilities intended for musicians of all levels</li>
				<li>An open-source repository designed to be easily forked and extended</li>
				<li>A young community of technical music theory enthusiasts</li>
			</ul>

			<p>
				An early beta demo can be found <a href='https://dan9418.github.io/play-what-sample/' target='_blank' rel='noopener noreferrer'>here</a>.
			</p>

			<SectionHeader text="Mobile Apps" />

			<SectionSubheader text="Augmented Reality Dashboard" />
			<p>
				I developed an
				<span className='italic'> augmented reality dashboard </span>
				Android app for my senior design project at Pitt.
				It was sponsored by
				<a className='code-link' href='https://www.eaton.com' target='_blank' rel='noopener noreferrer'>Eaton</a>
				and won 2nd place at my department's design expo.
			</p>

			<p>
				The app used an AR library to recognize mock electrical switchgear and retrieve its data over a wifi network.
			</p>

			<Gallery
				name='Augmented Reality Dashboard'
				description='Senior design project'
				images={[
					{
						name: 'The App In Action',
						year: null,
						caption: '',
						path: './assets/img/galleries/apps/ard.jpg'
					},
					{
						name: 'My Team & Sponsor',
						year: null,
						caption: '',
						path: './assets/img/galleries/apps/eaton.jpg'
					}
				]}
			/>


			<SectionSubheader text="Boolean Algebra Calculator" />

			<p>
				My first mobile project was an Android application for minimizing boolean expressions.
				It's not available on the app store anymore, but I plan to modernize it and convert it to a web app someday.
			</p>

			<Gallery
				name='Bit Decryptor'
				description=''
				images={[
					{
						name: 'Screenshot',
						year: null,
						caption: '',
						path: './assets/img/galleries/apps/bit_decryptor.jpg'
					},
					{
						name: 'Logo',
						year: null,
						caption: '',
						path: './assets/img/galleries/apps/bit_decryptor_logo.png'
					}
				]}
			/>

		</>
	);
};

export default Software;
