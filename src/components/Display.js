import PropTypes from 'prop-types';

const Display = function (props) {
  return (
    <div className="Display">
      Display Component has result property:
      $
      {props.result}
    </div>
  );
};

Display.PropTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
