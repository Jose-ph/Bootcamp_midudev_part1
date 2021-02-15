import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) =>{

  return (<h1>{props.course}</h1>)


}

const ParagraphOne = (props) => {

  return (

    <p>
    {props.part1} {props.exercises1}
  </p>
  )

}

const ParagraphTwo = (props) => {

  return (

    <p>
    {props.part2} {props.exercises2}
  </p>


  )

}

const ParagraphThree = (props) => {

  return (

    <p>
    {props.part3} {props.exercises3}
  </p>
  )
}

const ParagraphFour = (props) => {

  return (

    <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>



  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course = {course} />
      
      < ParagraphOne part1={part1} exercises1 = {exercises1} />
      
      <ParagraphTwo part2= {part2} exercises2= {exercises2} />

      <ParagraphThree part3 = {part3} exercises3 = {exercises3} />

      <ParagraphFour exercises1= {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
      
      
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))