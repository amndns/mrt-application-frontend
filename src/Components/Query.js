import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { stations, directions, time } from './options'

export class Query extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Dropdown placeholder='North Avenue' search selection options={stations} />
        <Dropdown placeholder='South' search selection options={directions} />
        <Dropdown placeholder='4 AM' search selection options={time} />
      </div>
    );
  }
}
