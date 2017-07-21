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
    const htmlText = ['I am taking the MRT at', 'heading', 'at about'];
    return (
      <div style={styles.div}>
        {htmlText[0]}
        <Dropdown
          placeholder='North Avenue'
          search selection
          options={stations}
          onChange={this.handleChangeStation}
          style={styles.dropdown} />
        <br /><br />

        {htmlText[1]}
        <Dropdown
          placeholder='South'
          selection compact
          options={directions}
          onChange={this.handleChangeDirection}
          style={styles.dropdown} />

        {htmlText[2]}
        <Dropdown
          placeholder='4 AM'
          search selection
          options={time}
          onChange={this.handleChangeTime}
          style={styles.dropdown} />
      </div>
    );
  }
}

const styles = {
  div: {
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '75px',
  },
  dropdown: {
    marginRight: '12px',
    marginLeft: '12px',
  },
};
