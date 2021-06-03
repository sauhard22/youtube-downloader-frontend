import './App.css';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './style.css'
import InputField from './components/InputField/InputField'
import { useState, useEffect } from 'react'

function App() {

  const [value, setValue] = useState("")
  const [data, setData] = useState("")

  function changeHeader(event) {
    setValue(event.target.value)
  }
  function handleClick() {
    setData(value)
  }

  useEffect(() => {
   fetch('https://localhost:4000/')
   .then(response => response.json)
   .then(json => console.log(json))
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      <h1>Enter the link you want to download</h1>
      <div className="int-fld">
        <InputField value={value} setValue={setValue} data={data} setData={setData} changeHeader={changeHeader} handleClick={handleClick}/>
        <h6>{data}</h6>
      </div>
    </div>
  );
}

export default App;