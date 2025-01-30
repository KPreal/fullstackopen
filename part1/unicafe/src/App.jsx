import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  if (text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  }
  else {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }




}

const Statistics = (props) => {
  //console.log(props)

  const good = props.unicafeStats[0]
  const neutral = props.unicafeStats[1]
  const bad = props.unicafeStats[2]


  const getAverage = () => (
    (good - bad) / (good + neutral + bad)
  )

  const getPositivePercentage = () => (
    (good / (good + neutral + bad)) * 100
  )

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={getAverage()} />
          <StatisticLine text="positive" value={getPositivePercentage()} />
        </tbody>
      </table>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics unicafeStats={[good, neutral, bad]} />

    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

export default App