import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClickGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)

    handleClickTotal({ updatedGood, neutral, bad })
    handleClickAvg({ updatedGood, neutral, bad })
    handleClickPositive({ updatedGood, bad })
  }

  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)

    handleClickTotal({ good, updatedNeutral, bad })
    handleClickAvg({ good, updatedNeutral, bad })
  }

  const handleClickBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)

    handleClickTotal({ good, neutral, updatedBad })
    handleClickAvg({ good, neutral, updatedBad })
    handleClickPositive({ good, updatedBad })
  }

  const handleClickTotal = (props) => {
    const updatedTotal = (props.good ?? props.updatedGood) + (props.neutral ?? props.updatedNeutral) + (props.bad ?? props.updatedBad);
    return setTotal(updatedTotal)
  }

  const handleClickAvg = (props) => {
    const avg = (props.good ?? props.updatedGood) + (props.neutral ?? props.updatedNeutral) + (props.bad ?? props.updatedBad);
    return setAvg(avg / 3)
  }

  const handleClickPositive = (props) => {
    const positive = ((props.good ?? props.updatedGood) / (props.bad ?? props.updatedBad)) * 100
    return setPositive(positive)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleClickGood} text='Good' />
      <Button handleClick={handleClickNeutral} text='Neutral' />
      <Button handleClick={handleClickBad} text='Bad' />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} avg={avg} positive={positive} />
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Statistics = (props) => {
  if (props.good > 0 || props.bad > 0 || props.neutral > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <Display text={props.good} option='good' />
        <Display text={props.neutral} option='neutral' />
        <Display text={props.bad} option='bad' />
        <Display text={props.total} option='all' />
        <Display text={props.avg} option='average' />
        <Display text={props.positive + '%'} option='positive' />
      </div>
    )
  }
  else {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
}
const Display = ({ option, text }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{option}</td>
            <td>{text}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;