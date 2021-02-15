import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

  

  return (
   
    <h1>{props.course}</h1>
  )

}

const Part1 = () =>{

  //const part1 = 'Fundamentals of React'
  //const exercises1 = 10

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  return (

    <p>{part1.name} {part1.exercises}</p>
  )
}

const Part2 = () =>{

 // const part2 = 'Using props to pass data'
  //const exercises2 = 7

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  return (

    <p>
    {part2.name} {part2.exercises}
  </p>
  )
}

const Part3 = () => {

 //const part3 = 'State of a component'
  //const exercises3 = 14

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (

    <p>{part3.name} {part3.exercises} </p>
  )
}
const Content = (props) => {

  return (
    <>
    <Part1/>
    <Part2/>
    <Part3 />
    

   </>
  )

}

const Total = (props) =>{

  return  (

    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )


} 










const App = () => {
  /*
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  */
 const course = 'Half Stack application development'

  return (
    <div>

      <Header course = {course} />

      <Content />
     
     
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))