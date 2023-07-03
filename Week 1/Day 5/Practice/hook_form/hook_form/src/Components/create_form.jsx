import React, { useState } from  'react';
    
    
function UserForm () {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [Confirm, setConfirm] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { Firstname,Lastname, email, password, Confirm };
        console.log("Welcome", newUser);
    };
    
    return(<div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text"  onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text"  onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email"  onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password"  onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div><label>Confirm Password: </label>
                <input type="password"  onChange={ (e) => setConfirm(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h1>Your form data</h1>,
        <p>First Name: {Firstname}</p>,
        <p>Last Name: {Lastname}</p>,
        <p>Email Address: {email},</p>
        <p>Password: {password}</p>,
        <p>Confirm Password: {Confirm}</p></div>

    );

};
    
export default UserForm;
