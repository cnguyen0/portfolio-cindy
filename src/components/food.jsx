import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react'

export default class Food extends React.Component {
  render() {
    return (
      <div>
        <Modal trigger={
					<Card link>
						<Image src='./client/img/foodrecyle.png' />
						<Card.Content>
							<Card.Header>
								DRG Food Recovery
							</Card.Header>
							<Card.Meta>
								<span className='date'>
									Feb. 2018 - Present
								</span>
							</Card.Meta>
						</Card.Content>
					</Card>
          } style={{textAlign: 'left'}}>
          <Modal.Header>DRG Food Recovery</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Background Information</Header>
              <p>The DRG Food Recovery aims to reduce food waste on the local UW Seattle campus. We are currently
                working on a web application that partners with UW Housing and Food Services and local homeless
                shelter to bring leftover food to shelters that needs it. The project is going underproduction
                and going into building the front-end of the project as of now.</p>
              <hr />
              <Header>My Role</Header>
              <p>I got hired as a front-end developer in February 2018. We are using React to develop all front
                end designs. Since the UX design team have made a prototype and wireframe of all of the expected
                design, I have been using their prototype to replicate it as closely as possible.</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
