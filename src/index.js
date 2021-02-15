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
  
  const handleClick = () => {

    updateCounter(counterValue + 1)
    console.log("Sumé 1")

  }

  const esPar = counterValue % 2 === 0

  const MensajePar = esPar ? 'El número es par' : 'El número es impar'

  return (
    <div>

     <h1> El contador está en {counterValue} </h1>

     <button onClick = {handleClick}>Aumentar</button>

     <button onClick = {()=>{

      updateCounter(counterValue - 1)
      


     }} >Disminuir</button>

     <p>{MensajePar}</p>
      
     
      
    </div>
  )
}





  ReactDOM.render(<App/>,
    document.getElementById('root'))
 




