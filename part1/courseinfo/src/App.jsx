const App = () => {
  const course = 'Half Stack application development'
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
  const parts = [part1, part2, part3]

  return (
    <div>
      <Header course= {course} />
      <Content exercises = {parts}/>
      <Total parts= {parts}/>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (   
    <div>
      <Part part={props.exercises[0].name} exercises={props.exercises[0].exercises}/>
      <Part part={props.exercises[1].name} exercises={props.exercises[1].exercises}/>
      <Part part={props.exercises[2].name} exercises={props.exercises[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}
const Total = (props) => {

  const sum = props.parts.reduce((acc, part) => acc + part.exercises, 0);
  
  return <p>Number of exercises {sum}</p>
}
export default App
