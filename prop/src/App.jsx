import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonCard firstName={"Ilke"} lastName={"Lea"} age={35} haircolor={"brown"} /><hr />
      <PersonCard firstName={"Bandile"} lastName={"Thabo"} age={25} haircolor={"black"} /><hr />
      <PersonCard firstName={"Felix"} lastName={"Okonta"} age={58} haircolor={"black"} /><hr />
      <PersonCard firstName={"Joannes"} lastName={"Bester"} age={50} haircolor={"blond"} /><hr />
    </>
  )
}

export default App
