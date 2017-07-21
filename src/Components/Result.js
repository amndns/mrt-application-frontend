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
    return (
      <Segment padded style={styles.segment}>
        The minimum expected number of trains you will have to wait before you can ride is: <br /><Header color='grey'>{this.state.result}</Header>
      </Segment>
    );
  }
}

const styles = {
  segment: {
    textAlign: 'center',
    fontSize: 30,
    color: 'grey',
  },
  square: {
    width: 175,
    height: 175,
  },
};
