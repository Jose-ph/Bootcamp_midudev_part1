import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

  

  return (
   
    <h1 style = {{color: props.color}}  >{props.course}</h1>
  )

}


const Content = (props) => {

  return (
    <>
      

   </>
  )

}

const Total = (props) =>{

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return  (

    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  )


} 










const App = () => {

  const course = 'Bootcamp de Full Stack Open'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  

  return (
    <div>

      <Header color = 'red' course = {course} />

      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>

      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
      
     
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))