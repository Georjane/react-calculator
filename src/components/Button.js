/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

export default function Button({ buttonName }) {
  return <button type="button">{ buttonName }</button>;
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
