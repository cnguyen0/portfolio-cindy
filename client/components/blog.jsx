import React from 'react';
import { Card, Icon, Image, Modal, Header, Grid } from 'semantic-ui-react'


import './style.scss';

export default class Blog extends React.Component {

  render() {
    return (
			<div style={{textAlign: 'left'}}>
				<h1>My Blogs</h1>
				<p>I don't have any current blogs right now, but feel free to come back and check it out some
					time soon! I will try to update as much as I can.</p>


				<Grid>
					<Grid.Row columns={4}>
						<Grid.Column>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
    );
  }
}