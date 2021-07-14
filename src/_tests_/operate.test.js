import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import operate from '../logic/operate';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('returns the sum of two nums', () => {
    const result = operate(4, 5, '+');
    expect(result).toEqual('9');
  });

  it('returns the difference of two nums', () => {
    const result = operate(10, 5, '-');
    expect(result).toEqual('5');
  });

  it('does not return the wrong sum of two nums', () => {
    const result = operate(4, 5, '+');
    expect(result).not.toEqual('15');
  });

  it('does not return the wrong product of two nums', () => {
    const result = operate(4, 5, 'x');
    expect(result).not.toEqual('15');
  });
});
