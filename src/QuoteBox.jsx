
import Button from "./Button"
import quotes from "./quotes.json"

const QuoteBox=({color})=>{
    
    
    //Para las frases
    const randomQuotes=Math.floor(Math.random()*quotes.length)
    const quote=randomQuotes
    
    
   
    
    
    document.body.style=`background:${color}`
    return(
        
        <div className="card" style={{color:color}}>
            <div>
                <i class="fa-solid fa-quote-left"></i>
                <p><span>{quotes[quote].quote}</span></p>
            </div>
            <p>{quotes[quote].author}</p>
            <Button/>
            
        </div>
    )
}
export default QuoteBox