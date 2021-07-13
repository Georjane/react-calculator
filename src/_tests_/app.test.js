import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
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

  it('contains 19 buttons links', () => {
    const wrapper = shallow(<ButtonPanel clickHandler={jest.fn()} />).find(Button).length;
    expect(wrapper).toBe(19);
  });

  it('returns the addition of two nums', () => {
    const result = operate(4, 5, '+');
    expect(result).toEqual('9');
  });

  it('calculates the product of two digits', () => {
    const result = calculate({
      total: '6', next: '5', operation: 'x',
    }, '=');
    expect(result).toEqual({
      total: '30', next: null, operation: null,
    });
  });

  it('does not calculate the wrong product of two digits', () => {
    const result = calculate({
      total: '10', next: '5', operation: 'x',
    }, '=');
    expect(result).not.toEqual({
      total: '30', next: null, operation: null,
    });
  });

  it('does not calculate the wrong difference of two digits', () => {
    const result = calculate({
      total: '100', next: '50', operation: '-',
    }, '=');
    expect(result).not.toEqual({
      total: '30', next: null, operation: null,
    });
  });

  it('calculates the dividend of two digits', () => {
    const result = calculate({
      total: '10', next: '5', operation: '÷',
    }, '=');
    expect(result).toEqual({
      total: '2', next: null, operation: null,
    });
  });
});
