import Greet from './Components/greet'
import './App.css'
import Person from './Components/Person'
import { PersonList } from './Components/PersonList'
import { Status } from './Components/Status'
import { Heading } from './Components/heading'
import Osker from './Components/oskar'
import Button from './Components/button'

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
      <Status status="success" />
      <Heading>Children heading</Heading>
      <Osker>
        <Heading>the data with osker</Heading>
      </Osker>

      <Button
        handleClick={(event, Id) => console.log('btn clicked', event, Id)}
      />
    </div>
  )
}

export default App
