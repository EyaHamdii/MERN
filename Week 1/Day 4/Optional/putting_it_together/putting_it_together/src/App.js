import React from 'react';
import './App.css';
import MyComponents from './components/MyComponents';


  const person =[{
    firstName: "Doe",
    lastName:"Jane",
    age: 45,
    hairColor :"Black"
  },
  {
    firstName:"Smith",
    lastName:"John",
    age: 40,
    hairColor: "Brown"

  },
  {
    firstName:"Smith",
    lastName:"Maria",
    age: 62,
    hairColor: "Brown"
  }]
  function App() {
  return (
    <div className="App">
    {person.map((p ,idx)=>{
    return(<div key={idx}><MyComponents firstName={p.firstName} lastName={p.lastName} age={p.age} hairColor={p.hairColor}/> 
    </div>)
      
})} 
</div>
);
}

export default App;