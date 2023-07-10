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


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { Firstname,Lastname, email, password, Confirm };
        console.log("Welcome", newUser);
    };
const handleTitle = (e) => {
    setFirstname(e.target.value);
    if(e.target.value.length < 1) {
        setTitleError("Name is required!");
    } else if(e.target.value.length < 3) {
        setTitleError("Name must be 3 characters or longer!");
    } else {
        setTitleError("");
    }
}
const handleTitle1 = (e) => {
    setLastname(e.target.value);
    if(e.target.value.length < 1) {
        setTitleError1("Last Name is required!");
    } else if(e.target.value.length < 3) {
        setTitleError1("Last Name must be 3 characters or longer!");
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
      

           
     
<button type="submit" onSubmit={createUser}>Create USER</button>
        </form>
</div>

    );

};
    
export default UserForm;