import chai from 'chai'
import React from 'react'
import sinon from 'sinon';
import { shallow }  from 'enzyme'

import { Main } from '../src/Components/Main'
import { Dropdown } from 'semantic-ui-react'
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

  it('should have a function to update the station state', () => {
    const wrapper = shallow(<Main />);
    wrapper.instance().changeStation(13);
    wrapper.update()
    expect(wrapper.state().station).to.equal(13);
  });

  it('should have a function to update the direction state', () => {
    const wrapper = shallow(<Main />);
    wrapper.instance().changeDirection(1);
    wrapper.update()
    expect(wrapper.state().direction).to.equal(1);
  });

  it('should have a function to update the time state', () => {
    const wrapper = shallow(<Main />);
    wrapper.instance().changeTime(19);
    wrapper.update()
    expect(wrapper.state().time).to.equal(19);
  });
});
