import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const arr = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(arr)
  const [mostVoted, setMostVoted] = useState({ mostVoted: anecdotes[0], vote: 0 })

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
  }

  const handleClickNext = () => {
    const randomNumber = getRandomNumber(anecdotes.length)
    setSelected(randomNumber)
  }

  const handleClickVote = () => {
    let copyVotes = [...vote]
    copyVotes[selected] += 1
    setVote(copyVotes)
    mostVotedAnecdote(copyVotes)
  }

  const mostVotedAnecdote = (copyVotes) => {
    const copy = { ...mostVoted }

    let maxVoteIndex = getMaxVoteIndex(copyVotes)
    copy.mostVoted = anecdotes[maxVoteIndex]
    copy.vote = copyVotes[maxVoteIndex]

    setMostVoted(copy)
    console.log(mostVoted)
    console.log(maxVoteIndex)
  }

  const getMaxVoteIndex = (copyVotes) => {
    const arrLength = copyVotes.length
    let maxValue = copyVotes[0];
    let maxVoteIndex = 0;
    for (let i = 0; i < arrLength; i++) {
      if (copyVotes[i] > maxValue) {
        maxValue = copyVotes[i]
        maxVoteIndex = i
      }
    }
    return maxVoteIndex
  }

  return (
    <div>
      <DisplayAnectodes selected={anecdotes[selected]} />
      <DisplayVotes selected={vote[selected]} />
      <Button handleClick={handleClickVote} value='vote' />
      <Button handleClick={handleClickNext} value='next anecdote' />
      <MostVotedAnecdote mostVoted={mostVoted.mostVoted} vote={mostVoted.vote} />
    </div>
  )
}

const Button = ({ handleClick, value }) => {
  return (
    <div>
      <button onClick={handleClick}>{value}</button>
    </div>
  )
}

const Display = ({ selected }) => {
  return (
    <div>
      {selected}
    </div>
  )
}

const DisplayAnectodes = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display selected={props.selected} />
    </div>
  )
}

const DisplayVotes = (props) => {
  const string = `has ${props.selected} votes`;
  return (
    <div>
      <Display selected={string} />
    </div>
  )
}

const MostVotedAnecdote = (props) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <Display selected={props.mostVoted} />
      <DisplayVotes selected={props.vote} />
    </div>
  )
}
export default App