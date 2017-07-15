import chai from 'chai'
import React from 'react'
import { shallow }  from 'enzyme'

import { Query } from '../src/Components/Query'
import { Dropdown } from 'semantic-ui-react'
import { stations, directions, time } from '../src/Components/options'

let expect = chai.expect

describe('<Query />', () => {
  it('should render three Dropdown components', () => {
    const wrapper = shallow(<Query />);
    expect(wrapper.find(Dropdown)).to.have.length(3);
  });

  it('should render a Dropdown for stations', () => {
    const wrapper = shallow(<Query />).find(Dropdown).first();
    expect(wrapper.find({ options: stations })).to.have.length(1);
  });

  it('should render a Dropdown for directions', () => {
    const wrapper = shallow(<Query />).find(Dropdown).at(1);
    expect(wrapper.find({ options: directions })).to.have.length(1);
  });

  it('should render a Dropdown for time', () => {
    const wrapper = shallow(<Query />).find(Dropdown).at(2);
    expect(wrapper.find({ options: time })).to.have.length(1);
  });

  it('should return the correct value when selecting from the Dropdown for stations', () => {
    let comparison = 1;
    stations.forEach((option) => {
      expect(option.value).to.equal(comparison++);
    });
  });

  it('should return the correct value when selecting from the Dropdown for directions', () => {
    let comparison = 1;
    directions.forEach((option) => {
      expect(option.value).to.equal(comparison--);
    });
  });

  it('should return the correct value when selecting from the Dropdown for time', () => {
    let comparison = 0;
    time.forEach((option) => {
      expect(option.value).to.equal(comparison++);
    });
  });
});
