import { useState, useEffect } from 'react'
import Form from './components/Form'
import countryService from './services/countries'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [searchedInput, setSearchedInput] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
      .catch(error => {
        console.log(`no records`)
      })
  }, [])

  return (
    <div>
      <Form setSearchedInput={setSearchedInput} />
      <Country countries={countries} searchedInput={searchedInput} />
    </div>
  )
}

export default App