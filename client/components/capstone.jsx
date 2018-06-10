import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react'

export default class Capstone extends React.Component {
  render() {
    return (
      <div>
        <Modal trigger={
					<Card link>
						<Image src='./client/img/ischool.png' />
						<Card.Content>
							<Card.Header>
								Capstone: Grandma's House
							</Card.Header>
							<Card.Meta>
								<span className='date'>
									Jan. 2018 - Present
								</span>
							</Card.Meta>
						</Card.Content>
					</Card>
          } style={{textAlign: 'left'}}>
          <Modal.Header>Grandma's House</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Background Information</Header>
              <p>As required for my major, my capstone team's project project is an interactive web application, called ‘Grandma’s House’, that allows local 
                home chefs to cook for their communities and generate revenue at home. Chefs will be advertised 
                on the platform and be visited by users who are interested in exploring various home-cooked 
                cuisines by locals in the area. Some of these unique cuisines may not be available in the areas 
                that customers are located. This application would support entrepreneurship and small local 
                businesses. Our hope would be to provide a platform for food enthusiasts to explore farther 
                than just restaurants and connect with the locals in their community as they support local 
                business, inspiring home chefs to live their dreams.</p>
              <p>My role in this project is the developer. I will be doing both front and back end work.</p>
              <hr />
							<Header>Current Process</Header>
              <p>The first step to everything: research. When working on a 2-side market, there is a LOT of 
                research that needs to be done in order to develop a successful project. There are many considerations
                that needs to be address such as legal policies, supply and demand, and marketing. Right now,
                we are currently in this step and will update when our project is further developed.</p>
              <Header>Highlighted Features</Header>
              <p>To be completed when the project is undergoing development phase.</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
