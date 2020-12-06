import * as React from "react";
import SectionHeader from "../../ui/Headers/SectionHeader";
import "./Home.css";

const Home = () => {

	return (
		<div className="home">
			<SectionHeader text="I'm Dan Bednarczyk" />
			<p>
				I'm a web developer from Pittsburgh, PA currently based in Sacramento, CA.
				I specialize in frontend technologies like React and Next.js, but I have worked across the web stack.
				Outside of work, I have many hobbies, including music, gardening, travel, fitness, cooking, community develoment, and outdoor adventures.
			</p>
		</div>
	);
};

export default Home;