import PropTypes from 'prop-types';

const Button = function (props) {
  const { buttonName } = props;
  return (
    { buttonName }
  );
};

Button.PropTypes = {
  buttonName: PropTypes.string,
};

export default Button;
