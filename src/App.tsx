import React from 'react'
import Greet from './Components/greet'
import './App.css'
import Person from './Components/Person'
import { PersonList } from './Components/PersonList'

function App() {
  const personName = {
    first: 'Yogesh',
    last: 'Mishra',
  }

  //for the person list
  const personList = [
    {
      first: 'Yogesh',
      last: 'Mishra',
    },
    {
      first: 'Yogesh2',
      last: 'Mishra2',
    },
  ]

  return (
    <div className="App">
      <Greet name="Yogesh" age={24} isLoggedin={true} />
      <Person name={personName} />
      <PersonList name={personList} />
    </div>
  )
}

export default App
