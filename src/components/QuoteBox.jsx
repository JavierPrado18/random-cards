import React, { useState } from 'react';
import quotes from "../quotes.json"
import Button from './Button';
const QuoteBox = () => {
    const randomNumber=Math.floor(Math.random()*quotes.length);
    const [index ,setIndex]=useState(randomNumber)

    const colors=["#FF99C8","#FCF6BD","#D0F4DE","#A9DEF9","#E4C1F9","#ffbe0b","#fb5607","#b56576","#2ec4b6"];
    const randomColors=Math.floor(Math.random()*colors.length)
    const color=colors[randomColors];

    const randomQuote=()=>{
        const randomNumber=Math.floor(Math.random()*quotes.length)
        setIndex(randomNumber)
        document.body.style=`background-color:${color};`
    }
    document.body.style=`background-color:${colors[randomColors]};`

    return (
        <div className='card' style={{color:`${color}`}}>
            <div className='quote'>
                <div><i class="fa-solid fa-quote-left"></i></div>
                <p>{quotes[index].quote}</p>
            </div>
            <p>{quotes[index].author}</p>
            <Button randomQuote={randomQuote} color={color}/>
        </div>
    );
};

export default QuoteBox