import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';

const Loading = ({ text, size, inverse, wrapperClass }) => (
  <div className={`${wrapperClass}`}>
    <div className={`loading ${size} ${inverse}`}>
      <div className="loader-spinner"></div>
      {text && <h4 className="text">{text}</h4>}
    </div>
  </div>
);

Loading.defaultProps = {
  size: 'medium'
};

Loading.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string.isRequired,
  inverse: PropTypes.string
};

export default Loading;
