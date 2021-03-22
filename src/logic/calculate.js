import operate from './operate';

const calculate = (dataObject, buttonName) => {
  const { total, next, operation } = dataObject;
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  if (buttonName === '+/-') {
    total *= (-1);
    next *= (-1);
  }
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
  if (numbers.includes(buttonName) && operation === null) {
    total = total === null ? buttonName : total + buttonName;
  }
  if (numbers.includes(buttonName) && operation !== null) {
    next = next === null ? buttonName : next + buttonName;
  }
  if (operands.includes(buttonName) && (total !== null || total !== undefined)) {
    operation = buttonName;
  }
  if (buttonName === '=' && total !== null && next !== null) {
    if (operands.includes(operation)) total = operate(total, next, operation);
    operation = null;
    next = null;
  }
  return { total, next, operation };
};

export default calculate;
