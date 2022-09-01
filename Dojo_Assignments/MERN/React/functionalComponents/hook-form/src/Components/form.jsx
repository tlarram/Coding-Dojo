import React, { useState } from  'react';
import Display from './Display';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmpassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password,confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>Username: </label> 
                    <input type="text" name='username' value={username} onChange={ (e) => setUsername(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text"  name='email' value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name='password' value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="password" name='confirmpassword' value={confirmpassword} onChange={ (e) => setConfirmpassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <Display username={username} email={email} password={password} confirmpassword= {confirmpassword} />
        </div>
    );
};
    
export default UserForm;