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
                Commuting is a very important task in our busy lives. However, developing cities have congested transport systems that leaves frustrations to the commuters, particularly in using the Metro Rail Transit System. Thus, commuters are interested on strategies that minimizes waiting time before riding in a train station at a given time. Using the MRT entry-exit data from Department of Transportation and Communications, this web app uses a simple probability model that tells the chances of a commuter on riding a train in minimal waiting time.
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
