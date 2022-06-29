import { useState } from "react";
import QuoteBox from "./QuoteBox";
import quotes from "./quotes.json";

const Button = () => {
  //Para las frases
    const randomQuotes = Math.floor(Math.random() * quotes.length);
    const [quote, setQuote] = useState(randomQuotes);

    //Para los colores
    const colors = [
        "#1A7F91",
        "#F3C516",
        "#A42B12",
        "#3E3E3D",
        "#353173",
        "#ADADAD",
        "#AEC9D0",
        "#FBE882",
        "#4FBCFD",
        "#32DA78",
    ];
    const randomColors = Math.floor(Math.random() * colors.length);
    const color = colors[randomColors];

    //El boton para cambiar la frase
    const change = () => {
        const randomQuotes = Math.floor(Math.random() * quotes.length);
        setQuote(randomQuotes);
    };
    return (
        <>
        <QuoteBox quote={quote} color={color} />
        <p className="btn" onClick={change} style={{ color: color }}>
            <i class="fa-solid fa-circle-chevron-right"></i>
        </p>
        </>
    );
};
export default Button;
