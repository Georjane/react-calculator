/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

export default function Button({
  name, clickHandler, color, wide,
}) {
  return <button className={color ? 'orange' : 'buttons'} type="button" onClick={clickHandler} style={{ width: wide ? '350px' : '175px' }}>{ name }</button>;
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  clickHandler: () => '',
};
