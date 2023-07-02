import PersonCard from './Components/PersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
  <PersonCard firstName="Doe" lastName="Jane" age={ 45 } hairColor="Black"/>
  <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown"/>
  <PersonCard firstName="Fillmore" lastName="Miller" age={ 50 } hairColor="Brown"/>
  <PersonCard firstName="Smith" lastName="Maria" age={ 62 } hairColor="Brown"/>
    </div>
  );
}

export default App;
