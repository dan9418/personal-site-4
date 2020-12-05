import * as React from "react";
import "./Resume.css";
import ICON from "../../ui/Icon";

function ResumePositionHeader(props) {
	return (
		<>
			<h3>
				<div>{props.company}</div>
				<div>{props.date}{ICON.calendar}</div>
			</h3>
			<h4>
				<div>{props.title}</div>
				<div>{props.location}{ICON.location}</div>
			</h4>
		</>
	);
}

const Resume = () => {

	return (
		<div className="resume">
			<h1>Resume</h1>

			<div>

				<h2>Technical Skills</h2>

				<table className='skills'>
					<thead>
						<tr>
							<th>Frontend</th>
							<th>Backend</th>
							<th>Databases</th>
							<th>Other</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<ul>
									<li>JavaScript (ES6)</li>
									<li>TypeScript</li>
									<li>React</li>
									<li>Angular</li>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>JSON / XML</li>
									<li>Jasmine / Mocha Testing</li>
								</ul>
							</td>
							<td>
								<ul>
									<li>.NET (C#)</li>
									<li>Node</li>
									<li>Java</li>
									<li>PHP</li>
									<li>C++</li>
									<li>NUnit Testing</li>
									<li>Selenium Testing</li>
								</ul>
							</td>
							<td>
								<ul>
									<li>SQL</li>
									<li>SQL Server</li>
									<li>Oracle</li>
									<li>SQLite</li>
									<li>MongoDB</li>
								</ul>
							</td>
							<td>
								<ul>
									<li>Git</li>
									<li>REST / HTTP</li>
									<li>npm</li>
									<li>Azure</li>
									<li>Android SDK</li>
									<li>Unit + Integration Testing</li>
									<li>Photoshop</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>

				<h2>Work Experience</h2>

				<ResumePositionHeader
					company='CBS Sports Digital'
					title='Frontend Engineer'
					date='December 2019 - Present'
					location='El Dorado Hills, CA'
				/>

				<ul>
					<li>Will be using React to modernize <a href='https://www.maxpreps.com/' target='_blank'>MaxPreps.com</a></li>
				</ul>

				<ResumePositionHeader
					company='Bentley Systems'
					title='Associate Software Engineer'
					date='May 2016 - July 2019'
					location='Pittsburgh, PA + Vilnius, LT'
				/>

				<ul>
					<li>Designed, implemented, and consumed various RESTful APIs</li>
					<li>Built responsive web applications using TypeScript, Angular, HTML5, and CSS3</li>
					<li>Authored backend services for scalability, flexibility, and modularity using .NET framework</li>
					<li>Integrated relational and NoSQL databases into web applications</li>
					<li>Worked with Azure cloud applications utilizing Octopus for CI/CD pipelines</li>
					<li>Utilized various Node packages, preprocessors, and task-runners</li>
					<li>Enforced SDLC best-practices such as source control management, code reviews, and TDD</li>
					<li>Contributed to highly cooperative agile teams using Scrum and Kanban, both on-site and remotely</li>
				</ul>

				<ResumePositionHeader
					company='The Bank of New York Mellon'
					title='Software Engineer Intern'
					date='May 2015 – August 2015'
					location='Pittsburgh, PA'
				/>

				<ul>
					<li>Syncronized schemas across DB2 databases to form single, master schema</li>
					<li>Automated daily data comparisons for a central Reference Data Hub to simplify internal data sharing</li>
					<li>Wrote Java application to integrate disparate datasources on a partitioned MVS/Linux mainframe</li>
				</ul>

				<ResumePositionHeader
					company='University of Pittsburgh, Residence Life'
					title='Resident Assistant'
					date='August 2014 - December 2015'
					location='Pittsburgh, PA'
				/>

				<ul>
					<li>Managed and mentored 57 freshmen engineering residents</li>
					<li>Enforced community standards for diverse pool of students</li>
					<li>Organized large-scale social, educational, and experiential programs</li>
				</ul>

				<h2>Education</h2>

				<ResumePositionHeader
					company='University of Pittsburgh, Swanson School of Engineering'
					title='BS, Computer Engineering'
					date='April 2017'
					location='Pittsburgh, PA'
				/>

				<ul>
					<li>Graduated with special distinction as the Outstanding Senior in departmental class</li>
					<li>3.71 GPA</li>
				</ul>

				<h2>Projects</h2>

				<ul>
					<li>Created and published <a href='https://dan9418.github.io/play-what-sample/' target='_blank' rel='noopener noreferrer'>Play What</a>, a React component library for visualizing music theory concepts</li>
					<li>Developed an <a href='https://github.com/dan9418/ARDashboard/' target='_blank' rel='noopener noreferrer'>augmented reality dashboard</a> mobile app to recognize and communicate with electrical switchgear (senior design project)</li>
					<li>Developed an Android app for boolean algebra calculations</li>
					<li>Assisted in design and construction of several tech-supplemented hydroponic gardening systems</li>
					<li>Studied audio engineering in the University of Pittsburgh Music Engineering Laboratory</li>
					<li>Developed this portfolio site in React and TypeScript</li>
				</ul>

				<h2>Awards</h2>

				<ul>
					<li>Selected for inaugural International Graduate Development Program in Vilnius, Lithuania</li>
					<li>Won 2nd place at departmental senior design expo for augmented reality mobile app</li>
					<li>Won 1st place for computer engineering conference paper on hybrid drives</li>
					<li>Eagle Scout</li>
				</ul>

			</div>

		</div >
	);
};

export default Resume;
