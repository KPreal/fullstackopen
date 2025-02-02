const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Header = ({course}) => (
  <h1>{course}</h1>
)

const Content = ({parts}) => (
  <div>
    <ul>
      {parts.map((part)=> (
        <li key={part.id}><Part part={part}/></li>
        ))}
    </ul>
    <b>total of {parts.reduce((sum,part)=>(sum+=part.exercises),0)} exercises</b>
  </div>
)

const Part = ({part}) => (
  <p>{part.name} {part.exercises}</p>
)



const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default App
