import { RANDOM_QUOTE, FETCH_QUOTES_SUCCESS, FETCH_QUOTES_FAIL } from '../constants/quoteConstants';

export const fetchQuotes = () => async (dispatch) => {
    try{
        console.log('object')
        const  data  = await fetch(
            'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        );
            console.log(data)
        const { quotes } = await data.json()

        dispatch({
            type: FETCH_QUOTES_SUCCESS, 
            payload: quotes
        })
    } catch (error) {
        console.log('test')
        dispatch({
            type: FETCH_QUOTES_FAIL,
            payload: error.response
        })
    }
};

export const generateRandomQuote = (randomNo) => ({
  type: RANDOM_QUOTE,
  payload: randomNo,
});