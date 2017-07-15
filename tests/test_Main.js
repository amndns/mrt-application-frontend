import chai from 'chai'
import React from 'react'
import { shallow }  from 'enzyme'

import { Main } from '../src/Components/Main'
import { Query } from '../src/Components/Query'
let expect = chai.expect

describe('<Main />', () => {
  it('should have a staion state', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state('station')).to.equal(1);
  });

  it('should have a direction state', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state('direction')).to.equal(0);
  });

  it('should have a time state', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state('time')).to.equal(0);
  });

  it('should render the Query component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(Query)).to.have.length(1);
  });
});
