import React from 'react'
import { Query } from './Query'

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: 1, // Represents the North Avenue Station
      direction: 0, // Represents the direction being South
      time: 0 // Represents the time at 5 AM
    };
  }

  render() {
    return (
      <div>
        <Query />
      </div>
    );
  }
}
