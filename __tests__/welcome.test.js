import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from '../app/components/Welcome';

describe('Welcome (Snapshot)', () => {
  it('Welcome renders Hello World', () => {
    const component = renderer.create(<Welcome />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
