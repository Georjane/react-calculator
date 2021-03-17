import PropTypes from 'prop-types';

const Button = function (props) {
  return (
    <div className="Button">Button Component</div>
  );
};

Button.PropTypes = {
  result: PropTypes.string
}

Button.defaultProps = {
  result: '0'
}

export default Button;