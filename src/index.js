import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'



const App = (props) => {


  let contador = 0
  

  return (
    <div>

     <h1> El contador está en {contador} </h1>
      
     
      
    </div>
  )
}





  ReactDOM.render(<App/>,
    document.getElementById('root'))
 




