import './App.css';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './style.css'
import InputField from './components/InputField/InputField'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <h1>Enter the link you want to download</h1>
      <div className="int-fld">
      <InputField/>
  
      </div>
    </div>
  );
}

export default App;
