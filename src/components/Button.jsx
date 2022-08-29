import React from 'react';

const Button = ({randomQuote,color}) => {
    
    return (
        < >
            <button onClick={randomQuote} style={{color:`${color}`}}><i class="fa-solid fa-circle-chevron-right"></i></button>
        </>
    );
};

export default Button;