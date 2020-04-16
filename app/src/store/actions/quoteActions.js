// thunks
//a thunk is a inner function returned by outter function

// Redux is synchronous
//we need to do some async operation
export const fetchQuote = () => {
return dispatch => {
    dispatch({type: "FETCH_QUOTE_START"})    
    }    
}