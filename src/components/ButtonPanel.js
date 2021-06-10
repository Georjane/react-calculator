import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ clickHandler }) {
  return (
    <div className="ButtonPanel">
      <div>
        <Button buttonName="AC" clickHandler={() => clickHandler('AC')} />
        <Button buttonName="+/-" clickHandler={() => clickHandler('+/-')} />
        <Button buttonName="%" clickHandler={() => clickHandler('%')} />
        <Button buttonName="÷" clickHandler={() => clickHandler('')} />
      </div>
      <div>
        <Button buttonName="7" clickHandler={() => clickHandler('7')} />
        <Button buttonName="8" clickHandler={() => clickHandler('8')} />
        <Button buttonName="9" clickHandler={() => clickHandler('9')} />
        <Button buttonName="X" clickHandler={() => clickHandler('x')} />
      </div>
      <div>
        <Button buttonName="4" clickHandler={() => clickHandler('4')} />
        <Button buttonName="5" clickHandler={() => clickHandler('5')} />
        <Button buttonName="6" clickHandler={() => clickHandler('6')} />
        <Button buttonName="-" clickHandler={() => clickHandler('-')} />
      </div>
      <div>
        <Button buttonName="1" clickHandler={() => clickHandler('1')} />
        <Button buttonName="2" clickHandler={() => clickHandler('2')} />
        <Button buttonName="3" clickHandler={() => clickHandler('3')} />
        <Button buttonName="+" clickHandler={() => clickHandler('+')} />
      </div>
      <div>
        {/* <Button buttonName=" " /> */}
        <Button buttonName="0" clickHandler={() => clickHandler('0')} />
        <Button buttonName="." clickHandler={() => clickHandler('.')} />
        <Button buttonName="=" clickHandler={() => clickHandler('=')} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
