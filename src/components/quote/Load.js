import React from 'react';
import PropTypes from 'prop-types';
import styles from './Load.css';

const Load = ({ fetch }) => (
  <button className={styles.Load} onClick={fetch}>More Quotes</button>
);

Load.propTypes = {
  fetch: PropTypes.func.isRequired
};

export default Load;

