export const getQuote = () => {

  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(quotes => {
      return {
        quote: quotes[0].quote,
        character: quotes[0].character,
        image: quotes[0].image
      };
    }
    );
};
