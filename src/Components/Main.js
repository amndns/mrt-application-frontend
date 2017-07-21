import React from 'react'
import { Container } from 'semantic-ui-react'
import { Query } from './Query'
import { Result } from './Result'
import { Head } from './Head'

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
        <Head />
        <Container text>
          <Query
            onChangeStation={this.changeStation}
            onChangeDirection={this.changeDirection}
            onChangeTime={this.changeTime} />
          <Result
            station={this.state.station}
            direction={this.state.direction}
            time={this.state.time} />
        </Container>
      </div>
    );
  }
}

const styles = {
  div: {
    textAlign: 'center',
  },
  dropdown: {
    marginRight: '12px',
    marginLeft: '12px',
  },
};
