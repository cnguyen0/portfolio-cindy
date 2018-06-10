import React from 'react';
import { Card, Icon, Image, Transition, Modal, Header, Grid } from 'semantic-ui-react'

import Unavsa from './unavsa.jsx';
import Capstone from './capstone.jsx';
import Info344 from './344.jsx';
import Food from './food.jsx';

import './style.scss';

export default class Portfolio extends React.Component {

  render() {
    return (
			<div style={{textAlign: 'left'}}>
				<h1>Dev Portfolio</h1>
				<p>Below are some of my current or past works in fuller details. Feel free to click on a 
					card to read more information about the project. If you are interested in my resume, 
					please click <a href='https://drive.google.com/open?id=1w1dCnKa9epP9UIFfXS8WAfgeGTtKBvnZ'>here.</a></p>
				<Grid>
					<Grid.Row columns={4}>
						<Grid.Column>
							<Unavsa />
						</Grid.Column>
						<Grid.Column>
							<Capstone />
						</Grid.Column>
						<Grid.Column>
							<Food />
						</Grid.Column>
						<Grid.Column>
							<Info344 />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
    );
  }
}