import React, { useState } from  'react';
    
    
const UserForm =(props)=> {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [Confirm, setConfirm] = useState("");
    const [titleError, setTitleError] = useState("");
    const [titleError1, setTitleError1] = useState("");
    const [titleError2, setTitleError2] = useState("");
    const [titleError3, setTitleError3] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { Firstname,Lastname, email, password, Confirm };
        console.log("Welcome", newUser);
    };
const handleTitle = (e) => {
    setFirstname(e.target.value);
    if(e.target.value.length < 1) {
        setTitleError("Name is required!");
    } else if(e.target.value.length < 2) {
        setTitleError("Title must be 2 characters or longer!");
    } else {
        setTitleError("");
    }
}
const handleTitle1 = (e) => {
    setLastname(e.target.value);
    if(e.target.value.length < 1) {
        setTitleError1("Last Name is required!");
    } else if(e.target.value.length < 2) {
        setTitleError1("Last Name must be 2 characters or longer!");
    } else {
        setTitleError1("");
    }
}
const handleTitle2 = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 1) {
        setTitleError2("Email is required!");
    } else if(e.target.value.length < 2) {
        setTitleError2("Email must be 2 characters or longer!");
    } else {
        setTitleError2("");
    }
}
const handleTitle3 = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 1) {
        setTitleError3("Password is required!");
    } else if(e.target.value.length < 8 ) {
        setTitleError3("Password must be 8 characters or longer!");
    }  else if ( e.target.value.lengt === Confirm )
            setTitleError3("Passwords don't match !")
    else {
        setTitleError3("");
    }

}
    
    return(<div>
        <form onSubmit={ createUser }>

                <label>First Name: </label>
                <input type="text"  onChange={handleTitle} />
    {
                    titleError ?
                    <p style={{color:'red'}}>{ titleError }</p> :
                    ''
                }
            <div>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text"  onChange={ handleTitle1 } />
{
                    titleError1 ?
                    <p style={{color:'red'}}>{ titleError1 }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email"  onChange={ handleTitle2 } />
                {
                    titleError2 ?
                    <p style={{color:'red'}}>{ titleError2 }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password"  onChange={ handleTitle3 } />
                {
                    titleError3 ?
                    <p style={{color:'red'}}>{ titleError3 }</p> :
                    ''
                }
            </div>
            <div><label>Confirm Password: </label>
                <input type="password"  onChange={ (e) => setConfirm(e.target.value) } />
            </div>
            <input type="submit" value="Create User" onChange={UserForm} />
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