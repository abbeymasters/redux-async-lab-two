import { getQuote } from '../services/simpsonsApi';
export const FETCH_QUOTES_LOADING = 'FETCH_QUOTES_LOADING';
export const FETCH_QUOTES = 'FETCH_QUOTES';
export const FETCH_QUOTES_DONE = 'FETCH_QUOTES_DONE';
export const FETCH_ERROR = 'FETCH_ERROR';


export const setQuotePromise = () => ({
  type: FETCH_QUOTES,
  pendingType: FETCH_QUOTES_LOADING,
  fulfilledType: FETCH_QUOTES_DONE,
  payload: getQuote()
});
