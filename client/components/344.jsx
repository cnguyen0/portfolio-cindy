import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react'

export default class Info344 extends React.Component {
  render() {
    return (
      <div>
        <Modal trigger={
					<Card link>
						<Image src='./client/img/gopherkey.png' />
						<Card.Content>
							<Card.Header>
								INFO 344: Sever-Side Final Project
							</Card.Header>
							<Card.Meta>
								<span className='date'>
									Nov. 2017 - Dec. 2017
								</span>
							</Card.Meta>
						</Card.Content>
					</Card>
          } style={{textAlign: 'left'}}>
          <Modal.Header>Final Project: Key Management Database</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Background Information</Header>
              <p>I took this class back in Autumn and it was the most challenging, yet rewarding, 
                class I have ever taken. I learned how to program a web server in the language Go. This
                project was my final project with a group of 4. We all divvy up the work and I did mostly
                the user's sessions and authentication.</p>
              <p>The project was focused on building an online resource for the Music department to have
                a streamlined check-in and check-out process for their building's key. Although this was a server
                side class, there were a lot of design consideration such as understanding all the the required
                workflow and RESTful APIs that are required, and building different types of user account 
                that would be able to complete its respective task.</p>
              <hr />
              <Header>Skills Gained</Header>
              <li>Understand and implement appropriate Cross-Origin Resource Sharing in server</li>
              <li>Communicate to server with HTTPS</li>
              <li>Using Docker containers to isolate environment</li>
              <li>Securely enable stateful sessions</li>
              <li>Authenticating users through local users account creation and OAuthentication with Facebook and Google</li>
              <li>Retreiving data from a running database</li>
              <li>Implementing a trie data structure</li>
              <li>Understanding and designing RESTful APIs</li>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
