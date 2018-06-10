import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react'

export default class Info362 extends React.Component {
  render() {
    return (
      <div>
        <Modal trigger={
					<Card link>
						<Image src='./client/img/netflix.png' />
						<Card.Content>
							<Card.Header>
								INFO 362: Visual Information Design
							</Card.Header>
							<Card.Meta>
								<span className='date'>
									Mar. 2017 - June 2017
								</span>
							</Card.Meta>
						</Card.Content>
					</Card>
          } style={{textAlign: 'left'}}>
          <Modal.Header>Netflix Infographics</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Background Information</Header>
              <p>In this class, I learned a lot about visual information design. Or to simply put, "how to 
                create an awesome infographics". I used Adobe Illustrator to create my final project.</p>
              <p>The skill I learned in this class includes: Adobe Illustrator, using models, emulating 
                different styles like font, color, flatness of icons, and conveying a message through design. 
                These skills all helped me create a final product that gives a nice visualization of how Netflix 
                is dominating the online streaming market.</p>
              <hr />
							<Header>Design Process</Header>
              <p>A lot of the process was taking one object at a time and slowly craft it to what my vision 
                of the infographic would look like. Since I modeled my infographic off an existing model, it was 
                easier for me to copy designs and style. The class incorporated peer critiques, where we had the 
                opportunity to get feedback and suggestions. I have learned that design is a process. It took many 
                tries to get to the vision that I had and a LOT of time to carefully craft that vision.</p>
              <p>For a full demonstration of my entire design process, please see the following website: 
                <a href="http://nguyenkcindy.wixsite.com/362portfolio2017"> http://nguyenkcindy.wixsite.com/362portfolio2017</a></p>
              <Image src='./client/img/netflixInfo.png' />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
