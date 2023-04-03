const Course = ({ courses }) => {
    return (
        <div>
            <Header header={courses[0].name} />
            <Content parts={courses[0].parts} />
            <Header header={courses[1].name} />
            <Content parts={courses[1].parts} />
        </div>
    )
}

const Header = ({ header }) => {
    return (
        <div>
            <h1>{header}</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    const totalExercise = parts.reduce((total, obj) => { return total + obj.exercises }, 0)
    return (
        <div>
            {parts.map(obj => <Part name={obj.name} exercise={obj.exercises} key={obj.id} />)}
            {<Sum totalExercise={totalExercise} />}
        </div>
    )

}

const Part = ({ name, exercise }) => {
    return (
        <div>
            <p>{name} {exercise}</p>
        </div>
    )
}

const Sum = ({ totalExercise }) => {
    return (
        <div>
            <p>total of {totalExercise} exercises</p>
        </div>
    )
}

export default Course;