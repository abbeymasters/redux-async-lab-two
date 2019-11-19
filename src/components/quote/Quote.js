import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, image, character }) => {

  return (
    <>
      <img src={image} alt={character} />
      <h1>{character}</h1>
      <h3>{quote}</h3>
    </>
  );
};

Quote.propTypes = { 
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default Quote;

