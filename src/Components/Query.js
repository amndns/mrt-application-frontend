import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { stations, directions, time } from './options'

export class Query extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeStation = this.handleChangeStation.bind(this);
    this.handleChangeDirection = this.handleChangeDirection.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
  }

  handleChangeStation(e, d) {
    const station = d.value;
    this.props.onChangeStation(station);
  }

  handleChangeDirection(e, d) {
    const direction = d.value;
    this.props.onChangeDirection(direction);
  }

  handleChangeTime(e, d) {
    const time = d.value;
    this.props.onChangeTime(time);
  }

  render() {
    return (
      <div>
        <Dropdown
          placeholder='North Avenue'
          search selection
          options={stations}
          onChange={this.handleChangeStation} />
        <Dropdown
          placeholder='South'
          search selection
          options={directions}
          onChange={this.handleChangeDirection} />
        <Dropdown
          placeholder='4 AM'
          search selection
          options={time}
          onChange={this.handleChangeTime} />
      </div>
    );
  }
}
