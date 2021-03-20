import PropTypes from 'prop-types';

const Display = function (props) {
  const { result } = props;
  return (
    { result }
  );
};

Display.PropTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
