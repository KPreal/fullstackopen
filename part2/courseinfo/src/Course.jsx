const Course = ({course}) => {
    return (
        <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        </div>
    )
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

export default Course

