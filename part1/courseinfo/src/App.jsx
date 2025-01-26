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
      <Header course= {course} />
      <Content exercise_names= {[part1,part2,part3]} num_exercises={[exercises1,exercises2,exercises3]}/>
      <Total exercises= {[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part part= {props.exercise_names[0]} exercises= {props.num_exercises[0]}/>
      <Part part= {props.exercise_names[1]} exercises= {props.num_exercises[1]}/>
      <Part part= {props.exercise_names[2]} exercises= {props.num_exercises[2]}/>
    </div>
  )
}

const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}
const Total = (props) => {
  console.log(props.exercises)
  const sum = props.exercises.reduce((a, b) => a + b, 0)
  return <p>Number of exercises {sum}</p>
}
export default App
