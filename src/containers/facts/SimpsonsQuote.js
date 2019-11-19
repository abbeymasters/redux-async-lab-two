import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Quote from '../../components/quote/Quote';
import { setQuotePromise } from '../../actions/simpsons';
import { getQuotes, getQuotesLoading } from '../../selectors/simpsons';
import Load from '../../components/quote/Load';

export default function SimpsonsQuote() {
  const loading = useSelector(state => getQuotesLoading(state));
  const list = useSelector(state => getQuotes(state));
  const dispatch = useDispatch();
  const loadQuotes = () => dispatch(setQuotePromise());

  useEffect(() => {
    loadQuotes();
  }, []);

  if(loading) return <h1>Retrieving Quotes...</h1>;


  return (
    <div>
      <h1>Yo Random Simpsons Quote:</h1>
      <Quote character={list.character} image={list.image} quote={list.quote} />
      <Load fetch={loadQuotes} />
    </div>
  );

}

