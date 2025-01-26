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
      <Content exercise_name= {part1} num_exercises={exercises1}/>
      <Content exercise_name= {part2} num_exercises={exercises2}/>
      <Content exercise_name= {part3} num_exercises={exercises3}/>
      <Total exercises= {[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return <p>{props.exercise_name} {props.num_exercises}</p>
}

const Total = (props) => {
  console.log(props.exercises)
  const sum = props.exercises.reduce((a, b) => a + b, 0)
  return <p>Number of exercises {sum}</p>
}
export default App
