
import './App.css';


const Mensaje = (props)=> {

  console.log(props)
  return(

    <h1 style={{color:props.color}}  >   {props.message}</h1>

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
           
      <Mensaje color ="red"  message ="Estamos en un curso" />
      <Mensaje color="green"  message ="de desarollo web Full Stack" />
      <Mensaje color ="blue" message="guiados por Midudev" />

      < Description/>
      
      
     
    </div>
  )
}

export default App;
