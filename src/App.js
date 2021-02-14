
import './App.css';


const Mensaje = (props)=> {

  console.log(props)
  return(

    <h1>{props.message}</h1>

  )
}

const Description = () => {

  return(

    <p>Hola manola soy una descripción hecha desde otro componente</p>
  )
}





const  App = ()=> {

  
  


  return (
    <div className="App">

      <h1>Hola Manola</h1>
           
      <Mensaje message ="Estamos en un curso" />
      <Mensaje message ="de desarollo web Full Stack" />
      <Mensaje message="guiados por Midudev" />

      < Description/>
      
      
     
    </div>
  )
}

export default App;
