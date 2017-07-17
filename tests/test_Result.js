import chai from 'chai'
import React from 'react'
import { shallow }  from 'enzyme'

import { Main } from '../src/Components/Main'
import { Result } from '../src/Components/Result'
let expect = chai.expect

describe('<Result />', () => {
  it('should receive a station prop from the Main component', () => {
    const wrapper = shallow(<Main />).find(Result);
    expect(wrapper.props().station).to.not.equal(undefined);
  });

  it('should receive a direction prop from the Main component', () => {
    const wrapper = shallow(<Main />).find(Result);
    expect(wrapper.props().direction).to.not.equal(undefined);
  });

  it('should receive a time prop from the Main component', () => {
    const wrapper = shallow(<Main />).find(Result);
    expect(wrapper.props().time).to.not.equal(undefined);
  });
});

// Look into how to do these: //

// TODO: Test if the componentWillReceiveProps did the correct job of fetching the correct data
