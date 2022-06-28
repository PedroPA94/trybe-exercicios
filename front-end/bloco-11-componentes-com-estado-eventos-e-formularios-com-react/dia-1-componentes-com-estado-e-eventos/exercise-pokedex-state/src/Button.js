import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
  render() {
    const { onClick, content, disabled, className } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        name={ content }
        disabled={ disabled }
        className={ className }
      >
        { content }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
