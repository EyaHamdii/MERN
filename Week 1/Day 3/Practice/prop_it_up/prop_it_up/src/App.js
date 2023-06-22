import React from 'react';
import './App.css';
import MyNewComponents from './components/MyNewComponents';


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
    return(<div key={idx}><MyNewComponents firstName={p.firstName} lastName={p.lastName} age={p.age} hairColor={p.hairColor}/> 
    </div>)
      
})} 
</div>
);
}

export default App;
