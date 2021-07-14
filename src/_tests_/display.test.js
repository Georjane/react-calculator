import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';
import Button from '../components/Button';

it('renders button correctly', () => {
  const tree = renderer.create(<Button name="AC" clickHandler={jest.fn()} />);
  expect(tree).toMatchSnapshot();
});

it('renders display correctly', () => {
  const tree = renderer.create(<Display result="0" next="" />);
  expect(tree).toMatchSnapshot();
});
