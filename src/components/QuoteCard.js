import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ simpsons }) => (
  <figure className="QuoteCard">
    <img src={simpsons.image} alt={simpsons.character} />
    <figcaption>
      <blockquote>{simpsons.quote}</blockquote>
      <cite>{simpsons.character}</cite>
    </figcaption>
  </figure>
);

export default QuoteCard;