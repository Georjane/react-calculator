import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from '../components/Button';
import ButtonPanel from '../components/ButtonPanel';
import Navbar from '../components/Navbar';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('contains 3 nav links', () => {
    const links = shallow(<Navbar />).find('Link').length;
    expect(links).toBe(3);
  });

  it('contains 19 buttons links', () => {
    const wrapper = shallow(<ButtonPanel clickHandler={jest.fn()} />).find(Button).length;
    expect(wrapper).toBe(19);
  });
});
