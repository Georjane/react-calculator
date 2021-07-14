import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('renders quotes page', () => {
  const tree = renderer.create(<Quote />);
  expect(tree).toMatchSnapshot();
});
