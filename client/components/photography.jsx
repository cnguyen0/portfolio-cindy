import React from 'react';
import { Card, Image, Modal, Header, Grid } from 'semantic-ui-react'

export default class Photography extends React.Component {
  render() {
    return (
      <div>
        <Modal trigger={
					<Card link>
						<Image src='./client/img/camera.png' />
						<Card.Content>
							<Card.Header>
								Personal Photography
							</Card.Header>
							<Card.Meta>
								<span className='date'>
									Dec. 2017 - Present
								</span>
							</Card.Meta>
						</Card.Content>
					</Card>
          } style={{textAlign: 'left'}}>
          <Modal.Header>Personal Photography</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Background Information</Header>
              <p>I started taking photos back in November 2017. I am very new to this field and it has been
                a good journey. I have learned a lot about different techniques and learning behind the scene
                of photography. So far, I have done mostly portrait photos with a couple of friends and editing
                using Adobe Lightroom. My current camera is a Canon Rebel T6i. One of my challenges currently is 
                understanding the full functionality of a DSLR. I often work under the manual setting but 
                I occasionally struggle understanding which settings would be the best. In this case, I would
                tinker around with the settings until I get the results that I want.</p>
              <hr />
							<Header>Current Work</Header>
              <p>All of my work is on Instagram <a href='https://www.instagram.com/omgcee'>(@omgcee)</a>. I try my best to update it as much as I can, depending on
                my schedule. I do not have the time to always go out and shoot, though I wish I had the time to
                so I can practice more. Feel free to check out my Instagram or view some photos below.</p>
              <Grid columns={1}>
                <Grid.Column>
                  <Image src="./client/img/photography/IMG_4025.jpg" />
                </Grid.Column>
              </Grid>
              <Grid columns={3}>
                <Grid.Column>
                  <Image src="./client/img/photography/IMG_4011.jpg" />
                </Grid.Column>
                <Grid.Column>
                  <Image src="./client/img/photography/IMG_4356.jpg" />
                </Grid.Column>
                <Grid.Column>
                  <Image src="./client/img/photography/IMG_4444.jpg" />
                </Grid.Column>
              </Grid>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
