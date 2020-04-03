import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ quote, image, character }) => {

  return (
    <div className={styles.Quote}>
      <img src={image} alt={character} />
      <h1>{character}</h1>
      <h3>{quote}</h3>
    </div>
  );
};

Quote.propTypes = { 
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default Quote;

