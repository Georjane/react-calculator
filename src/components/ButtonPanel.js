import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

export default function ButtonPanel({ clickHandler }) {
  return (
    <div className="btnPanel">
      <div className="btnPanel__row">
        <Button name="AC" clickHandler={() => clickHandler('AC')} />
        <Button name="+/-" clickHandler={() => clickHandler('+/-')} />
        <Button name="%" clickHandler={() => clickHandler('%')} />
        <Button name="÷" color="orange" clickHandler={() => clickHandler('÷')} />
      </div>
      <div className="btnPanel__row">
        <Button name="7" clickHandler={() => clickHandler('7')} />
        <Button name="8" clickHandler={() => clickHandler('8')} />
        <Button name="9" clickHandler={() => clickHandler('9')} />
        <Button name="x" color="orange" clickHandler={() => clickHandler('x')} />
      </div>
      <div className="btnPanel__row">
        <Button name="4" clickHandler={() => clickHandler('4')} />
        <Button name="5" clickHandler={() => clickHandler('5')} />
        <Button name="6" clickHandler={() => clickHandler('6')} />
        <Button name="-" color="orange" clickHandler={() => clickHandler('-')} />
      </div>
      <div className="btnPanel__row">
        <Button name="1" clickHandler={() => clickHandler('1')} />
        <Button name="2" clickHandler={() => clickHandler('2')} />
        <Button name="3" clickHandler={() => clickHandler('3')} />
        <Button name="+" color="orange" clickHandler={() => clickHandler('+')} />
      </div>
      <div className="btnPanel__row last__row">
        <Button name="0" wide clickHandler={() => clickHandler('0')} />
        <Button name="." clickHandler={() => clickHandler('.')} />
        <Button name="=" color="orange" clickHandler={() => clickHandler('=')} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
