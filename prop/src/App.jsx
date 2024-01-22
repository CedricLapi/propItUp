import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonCard firstName={"Ilke"} lastName={"Lea"} age={35} hairColor={"brown"} /><hr />
      <PersonCard firstName={"Bandile"} lastName={"Thabo"} age={25} hairColor={"black"} /><hr />
      <PersonCard firstName={"Felix"} lastName={"Okonta"} age={58} hairColor={"black"} /><hr />
      <PersonCard firstName={"Joannes"} lastName={"Bester"} age={50} hairColor={"blond"} /><hr />

      <button onClick={ () => alert("This button has been clicked!")}> Click Here! </button>
    </>
  )
}

export default App
