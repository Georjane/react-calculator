import React from 'react';
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

export default function Button({ buttonName, clickHandler }) {
  return <button type="button" onClick={clickHandler}>{ buttonName }</button>;
}

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  buttonName: '',
  clickHandler: () => '',
};
