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

    this.changeStation = this.changeStation.bind(this);
    this.changeDirection = this.changeDirection.bind(this);
    this.changeTime = this.changeTime.bind(this);
  }

  changeStation(newStation) {
    this.setState({
      station: newStation
    });
  }

  changeDirection(newDirection) {
    this.setState({
      direction: newDirection
    });
  }

  changeTime(newTime) {
    this.setState({
      time: newTime
    });
  }

  render() {
    return (
      <div>
        <Query
          onChangeStation={this.changeStation}
          onChangeDirection={this.changeDirection}
          onChangeTime={this.changeTime} />
      </div>
    );
  }
}

// {this.state.station} <br />
// {this.state.direction} <br />
// {this.state.time}
