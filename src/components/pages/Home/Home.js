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
			</p>
			<p>
				Outside of work, I am passionate about music, plants, travel, fitness, cooking, and community develoment.
				You can browse my portfolios to check out some of my projects.
			</p>
		</div>
	);
};

export default Home;
