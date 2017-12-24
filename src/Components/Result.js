import React from 'react'
import axios from 'axios'
import { Segment, Grid, Header } from 'semantic-ui-react'

export class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 1 };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.station !== nextProps.station || this.props.direction !== nextProps.direction || this.props.time !== nextProps.time) {
      axios.get(`http://localhost:3000/stations/${this.props.station}.json`)
        .then(res => this.props.direction ? res.data.train_n : res.data.train_s)
        .then(res => {
          const result = res[this.props.time]
          console.log(result)
          this.setState({ result: result })
        })
        .catch(error => {
          console.log(error)
          this.setState({ result: error.message })
        });
    }
  }

  render() {
    if (this.state.result === 0) {
      return (
        <Segment padded style={styles.pos}>
          You can ride immediately as soon as you arrive!
        </Segment>
      );
    } else {
      const word = this.state.result === 1 ? 'train' : 'trains'
      return (
        <Segment padded style={styles.neg}>
          You will still have to wait for:<br />
          <Header color='grey'>{this.state.result} {word}</Header>
          to pass before you can ride.
        </Segment>
      );
    }
  }
}

const styles = {
  pos: {
    textAlign: 'center',
    fontSize: 25,
    color: 'grey'
  },
  neg: {
    textAlign: 'center',
    fontSize: 25,
    color: 'grey',
  },
  square: {
    width: 175,
    height: 175,
  },
};
