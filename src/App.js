
import './App.css';

const  App = ()=> {

  const mensaje = "Hola Mundo";
  const a = 3;
  const b = 18;



  return (
    <div className="App">

      <h1>Titulo de la app</h1>

      Hola manola <br/>

      {mensaje + ' 2021'} <br/>

      <strong>Estamos trabajando en ello...</strong>

      <div>
        <p>El resultado es : {a+b} </p>
      </div>
     
    </div>
  );
}

export default App;
