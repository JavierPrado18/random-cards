
import './App.css'
import QuoteBox from './QuoteBox'

function App() {
  // let colors=["#1A7F91","#F3C516","#A42B12","#3E3E3D","#353173","#ADADAD","#AEC9D0","#FBE882","#4FBCFD","#32DA78"]
  // const randomColors=Math.floor(Math.random()*colors.length)
  // const color=colors[randomColors]
  // document.body.style=`background:${color}`
  const colors=["#1A7F91","#F3C516","#A42B12","#3E3E3D","#353173","#ADADAD","#AEC9D0","#FBE882","#4FBCFD","#32DA78"]
  const randomColors=Math.floor(Math.random()*colors.length)
  const color=colors[randomColors]
  
  return (
    <div className="App">
      
      <QuoteBox color={color}/>       
       
    </div>
  )
}

export default App
