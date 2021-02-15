import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'



const App = (props) => {

  let [counterValue, updateCounter] = useState(0)

 /* 
  let counter = useState(2)

  let counterValue = counter[0]
  let updateCounter = counter[1]

 */
  
  

  return (
    <div>

     <h1> El contador está en {counterValue} </h1>

     <button onClick = {() => {
       
       updateCounter(counterValue + 1)
      
     }} >Aumentar</button>

     <button onClick = {()=>{

      updateCounter(counterValue - 1)
      


     }} >Disminuir</button>
      
     
      
    </div>
  )
}





  ReactDOM.render(<App/>,
    document.getElementById('root'))
 




