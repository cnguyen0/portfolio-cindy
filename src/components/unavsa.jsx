import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react'

export default class Unavsa extends React.Component {
  render() {
    return (
      <div>
        <Modal trigger={
          <Card link>
            <Image src='./client/img/unavsa.png' />
            <Card.Content>
              <Card.Header>
                UNAVSA Registration Platform
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Nov. 2016 - Present
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>
          } style={{textAlign: 'left'}}>
          <Modal.Header>Union of North America Vietnamese Student Association</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Background Information</Header>
              <p>One thing that this organization struggle with every year is having a streamline solution 
                that will ease conference registration management. The Union of North America Vietnamese 
                Student Association hosts an annual conference that brings in 500 Vietnamese leaders from 
                across America and Canada. I have implemented various features such as hotel registration, QR
                check in, badge generator, and other various small features through the site. As IT Director
                this year, my vision was to build our product for scalability. As an umbrella organization, while
                we want to be able to provide resources to other organizations through the country. I have been
                working with other smaller organizations to implement our product.</p>
              <hr />
              <Header>Technical Details</Header>
              <p>For the front end, I have been using React and Redux while using Node.js in the backend.
                Using AWS S3 to store all uploaded images. Storing our database using PostgreSQL.</p>
              <Header>Highlighted Features</Header>
              <p>Some key features built in this site are...</p>
              <ul>
                <li>Users can save their profile and can easily register to events using that profile.</li>
                <li>Organization admin and event admins with access to admin panels.</li>
                <li>Admin panels have tailored features specific to their needs such as users analytics, editing
                  user's profile, ticket creation, workshop creation, badge generator, and admin management.
                </li>
                <li>QR scanner to check attendees in physically.</li>
                <li>Hotel registration with ability to share hotel codes with desired roommates.</li>
              </ul>
              <p>(to be continue: screen recordings of the features)</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
