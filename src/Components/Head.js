import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import { About } from './About'

export const Head = () => {
  return (
    <Segment clearing padded='very' style={styles.segment}>
        <Header as='h2' floated='left' style={styles.header}>
          MRT Application
        </Header>
        <About />
    </Segment>
  );
}

const styles = {
  segment: {
    backgroundColor: '#7b1113',
  },
  header: {
    color: 'white',
    marginBottom: 0,
    paddingLeft: '100px',
  },
};
