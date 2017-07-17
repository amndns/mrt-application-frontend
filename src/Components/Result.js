import React from 'react'
import axios from 'axios'

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
    }
  }

  render() {
    return (
      <div>
        {this.state.result}
      </div>
    );
  }
}

// {this.state.station} <br />
// {this.state.direction} <br />
// {this.state.time}
