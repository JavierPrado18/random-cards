

import quotes from "./quotes.json"

const QuoteBox=({quote ,color})=>{
    
    document.body.style=`background:${color}`
   
    return(
        
        <div  style={{color:color}}>
            <div>
                <i class="fa-solid fa-quote-left"></i>
                <p><span>{quotes[quote].quote}</span></p>
            </div>
            <p >{quotes[quote].author}</p>
        
            
        </div>
    )
}
export default QuoteBox