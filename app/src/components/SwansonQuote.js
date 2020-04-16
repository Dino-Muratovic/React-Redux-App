import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import {fetchQuote} from '../store/actions/quoteActions';



const SwansonQuote = (props) => {
    useEffect(() => {
        //call an action creator
        props.fetchQuote()


        
    }, [props]);// dependancy array

   


    return (
        <div>
            <h1>Swanson Quotes:</h1>
            {props.isFetching && <Loader
                type="TailSpin" 
                color="#00BFFF"
                height={80} 
                width={80}
            />}

            {/* if we have a quote in our state display that quote */}            
            {props.quote && <h3>"{props.quote}"</h3>}            
        </div>
    )
}

const mayStateToProps = state => {
    console.log(state);
    return {
        quote: state.quotes.quote,
        isFetching: state.quotes.isFetching,
        error: state.quotes.error
        //WE HAVE TO go state.quotes.error because our reducers have been combined
        //see line 4 in reducers/index.js
    }
}

export default connect(mayStateToProps, {fetchQuote}) (SwansonQuote);