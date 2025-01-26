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
      {/*<Total exercises= {parts}/>*/}
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(props)
  return (
    
    <div>
      {
      props.exercises.map(part => {
        return (<Part part={part.name} exercises={part.exercises}/>)} )
      }
      
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
