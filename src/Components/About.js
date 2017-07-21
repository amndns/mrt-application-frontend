import React from 'react'
import { Header, Modal, Icon, Grid } from 'semantic-ui-react'

export const About = () => {
  const trigger = (
    <Header as='h5' floated='right' style={styles.about}>
      About Us
    </Header>
  );
  
  return (
    <Modal closeIcon='close' trigger={trigger}>
      <Modal.Header as='h1'>Stop wasting time in lines.</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Grid>
            <Grid.Column width={4}>
              <Icon name='map outline' size='massive'/>
            </Grid.Column>
            <Grid.Column width={11}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae et aspernatur quibusdam ipsa qui tenetur, quae minus, consequatur laboriosam, numquam eius natus odit nesciunt. Ducimus placeat cupiditate, iusto distinctio architecto repellat deserunt ad maiores maxime, eaque dolor, veniam velit nobis sunt iure, id harum quos.
              </p>
            </Grid.Column>
          </Grid>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

const styles = {
  about: {
    color: 'white',
    marginBottom: 0,
    paddingTop: '8px',
    paddingRight: '100px',
    cursor: 'pointer',
  },
};
