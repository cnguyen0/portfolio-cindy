import React from 'react';
import { Card, Icon, Image, Modal, Header, Grid } from 'semantic-ui-react'

import Info362 from './362.jsx';
import Photography from './photography.jsx';

import './style.scss';

export default class Creative extends React.Component {

  render() {
    return (
			<div style={{textAlign: 'left'}}>
				<h1>Creative Portfolio</h1>
				<p>Beyond develoment and volunteering, I love to get creative! I recently picked up photography and filming. During my free time I like to shoot some photos and experiment different style. In addition, I love video editing and experimenting different video content.</p>
				<Grid>
					<Grid.Row columns={4}>
						<Grid.Column>
              <Photography />
						</Grid.Column>
						<Grid.Column>
              <Info362 />
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