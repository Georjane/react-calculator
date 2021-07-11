import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Button from '../components/Button';
import ButtonPanel from '../components/ButtonPanel';
import Navbar from '../components/Navbar';
import operate from '../logic/operate';
import calculate from '../logic/calculate';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('contains 3 nav links', () => {
    const links = shallow(<Navbar />).find('Link').length;
    expect(links).toBe(3);
  });

});