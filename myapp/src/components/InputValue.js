import React, { useState, useEffect } from 'react';
import '../styles/inputValue.css';

export default function InputTest() {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = () => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                // Update the quote state with the fetched quote content
                setQuote(data.content);
            })
            .catch(error => console.error('Error fetching quote:', error));
    };

    const selectRandomQuote = () => {
        // Fetch a new quote
        fetchQuote();
    };

    return (
        <div className='quote-container'>
            <div className='quote-text-content'>
                {/* Display the quote */}
                <p>{quote}</p>
                <button id='fetch-button' onClick={selectRandomQuote}>Quote me baby</button>
            </div>
            
        </div>
    );
}
