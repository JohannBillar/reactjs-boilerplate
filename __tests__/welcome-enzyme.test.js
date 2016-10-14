import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Welcome from '../app/components/Welcome';

describe('Welcome', () => {
  it('Welcome renders Hello World', () => {
    const welcome = shallow(<Welcome />);
    expect(welcome.find('div').text()).toEqual('Hello World');
  });
});
