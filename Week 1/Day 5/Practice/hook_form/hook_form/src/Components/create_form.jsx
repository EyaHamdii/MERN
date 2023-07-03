import React, { useState } from  'react';
    
    
const UserForm = (props) => {
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
    
    return(
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

    );
};
    
export default UserForm;
