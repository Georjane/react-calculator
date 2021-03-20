import PropTypes from 'prop-types';

export default function Display({ result }) {
  return (
    <div className="display">
      <h2>{ result }</h2>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
