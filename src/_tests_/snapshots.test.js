import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';
import Button from '../components/Button';
import Quote from '../components/Quote';
import Home from '../components/Home';

it('renders button correctly', () => {
  const tree = renderer.create(<Button name="AC" clickHandler={jest.fn()} />);
  expect(tree).toMatchSnapshot();
});

it('renders display correctly', () => {
  const tree = renderer.create(<Display result="0" next="" />);
  expect(tree).toMatchSnapshot();
});

it('renders quotes page', () => {
  const tree = renderer.create(<Quote />);
  expect(tree).toMatchSnapshot();
});

it('renders home page', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});
