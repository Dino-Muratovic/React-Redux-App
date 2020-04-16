import axios from 'axios';

// thunks
//a thunk is a inner function returned by outter function

// Redux is synchronous
//we need to do some async operation
export const fetchQuote = () => {
return dispatch => {
    dispatch({ type: "FETCH_QUOTE_START" }) 
    axios
    .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes') 
    .then(response => {
        console.log(`this is response`, response)
        //response.data
        dispatch({ type: 'FETCH_QUOTE_SUCESS', payload: response.data})
        
    })
    .catch(error => {
        console.log(`There was an ERROR`,error.response)
        //error.response.data
        //error.response.status
        dispatch({ type: "FETCH_QUOTE_ERROR", 
        payload: `Error ${error.response.status}: ${error.response.data}`})

    })
  
    }    
}