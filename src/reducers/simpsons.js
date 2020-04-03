import { FETCH_QUOTES, FETCH_QUOTES_DONE, FETCH_QUOTES_LOADING, FETCH_ERROR } from '../actions/simpsons';

const initialState = {
  quote: {
    quote: '',
    image: '',
    character: ''
  },
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTES_LOADING:
      return { ...state, loading: true };
    case FETCH_QUOTES_DONE:
      return { ...state, loading: false };
    case FETCH_QUOTES: 
      return { ...state, quote: { ...action.payload } };
    case FETCH_ERROR: 
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
