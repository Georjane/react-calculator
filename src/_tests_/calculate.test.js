import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import calculate from '../logic/calculate';

Enzyme.configure({ adapter: new Adapter() });

describe('Calculate methods', () => {
  it('calculates the sum of two digits', () => {
    const result = calculate({
      total: '10', next: '10', operation: '+',
    }, '=');
    expect(result).toEqual({
      total: '20', next: null, operation: null,
    });
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
      total: '40', next: null, operation: null,
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

  it('does not calculate the wrong sum of two digits', () => {
    const result = calculate({
      total: '10', next: '5', operation: '+',
    }, '=');
    expect(result).not.toEqual({
      total: '20', next: null, operation: null,
    });
  });
});
