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

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  

  return (
    <div>

      <Header color = 'red' course = {course.name} />

      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>

      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
      
     
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))