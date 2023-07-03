import UserForm from './Components/create_form'
// import { useState } from "react" 
import './App.css'; 
function App() {
const[form,setNewForm] =useState("")
  return (
    <div className="App">
<UserForm />
{form.map((setNewForm)=>{
<></><h1>Your form data</h1>,
<p>First Name:{props.Firstname}</p>,
<p>Last Name:{props.Lastname}</p>,
<p>Email Address:{props.email},</p>
<p>Password:{props.password}</p>,
<p>Confirm Password:{props.Confirm}</p>})}
    </div> 
);  
}

export default App;
