import React from 'react';
import { Tab } from 'semantic-ui-react'
import { Image, Grid } from 'semantic-ui-react'

import Portfolio from './portfolio.jsx'
import Creative from './creative.jsx'
import Blog from './blog.jsx'

import './style.scss';

export default class Home extends React.Component {

  render() {
		const panes = [
			{ menuItem: 'About Me', render: () => 
				<Tab.Pane attached={true}>
					<div style={{textAlign: 'center'}}>
						<h1>Hi, I'm Cindy and I make things happen.</h1>
						<p><i>I love to use different mediums and learn new things to tackle real life problems in my everyday life.</i></p>
						<hr />
					</div>
					<div>
						<Grid>
							<Grid.Column width={4}>
							</Grid.Column>
							<Grid.Column width={8}>
								<Image src='./client/img/me.jpg' style={{float: 'left', width: '250px', marginRight: '10px'}}/>
								<p>Greetings! Born and raised in Seattle, WA, I am currently studying <b>Informatics at the University of Washington</b>. I am a <b>full-stack developer</b>, being experienced in React and Node.js. I will be graduating in June 2018 with the intention of starting a full-time job after graduation.</p>
								<p>I am currently working at two jobs. I have a part-time job at UW-IT where I am a <b>web tools consultant</b>. I help faculties, staffs, and students online tools and resources available for their learning experience. In addition, I am a <b>front-end developer</b> for a grant-funded project on campus. I am currently building the user interface for a mobile application that will help campus food services deliver leftover food to homeless shelter.</p>
								<p>I am also involved with a continental non-profit organization as an <b>IT director</b>. I maintain their online registration platform and roll out all development projects for their annual leadership conference.</p>
								<p>I would love to chat! Lets talk about current world problems, new technology development, fashion trends, photography, or videography. The best way to contact me is by email or LinkedIn. You can email me at <b>cnguyen0@uw.edu</b>. </p>
								<p>Best,</p>
								<p>Cindy Nguyen</p>
								<br />
								<p><i>P.S. Feel free to check out my work in the tabs above or check out my 
									<a href='https://drive.google.com/open?id=1w1dCnKa9epP9UIFfXS8WAfgeGTtKBvnZ'> resume here</a>!</i></p>
							</Grid.Column>
							<Grid.Column width={4}>
							</Grid.Column>
						</Grid>
					</div>
				</Tab.Pane> 
			},
			{ menuItem: 'Dev Portfolio', render: () => 
				<Tab.Pane attached={true}><Portfolio /></Tab.Pane> 
			},
			{ menuItem: 'Creative Portfolio', render: () => 
				<Tab.Pane attached={true}><Creative /></Tab.Pane> 
			},
			{ menuItem: 'Blog', render: () => 
			<Tab.Pane attached={true}><Blog /></Tab.Pane> 
			}
		]

    return (
    	<div>
        	<Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
    	</div>
    );
  }
}