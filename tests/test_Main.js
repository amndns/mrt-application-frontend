import chai from 'chai'
import React from 'react'
import { shallow }  from 'enzyme'

import { Main } from '../src/Components/Main'
let expect = chai.expect

describe('<Main />', () => {

  it('should render the Main Component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).to.have.length(1);
  });

});
