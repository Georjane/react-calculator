import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('renders home page', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});
