import React, { useState } from  'react';
import Display from './Display';
    
const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastname, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState(""); 
    const [passwordError, setPasswordError] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password,confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //         return "Thank you for submitting the form!";
    //     } else {
    //         return "Welcome, please submit the form";
    //     }
    // };
    const handleSubmit =(e) =>{
        e.preventDefault()
        if(firstname.length>2 && lastname.length>2 && email.length >5 && password >=8 ){
            const newUser = { firstname,lastname, email, password }
            console.log(newUser)
            setHasBeenSubmitted(true)
    } else {
        alert("invalid form")
    }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value <1) {
            setFirstNameError("First Name is required!");

        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be ateast 2 characters");
        } else {
            setFirstNameError("");
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value <1) {
            setLastNameError("Last Name is required!");

        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be ateast 2 characters");
        } else {
            setLastNameError("");
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value <1) {
            setEmailError("Email is required!");

        } else if(e.target.value.length < 5) {
            setEmailError("Email must be ateast 5 characters");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value <1) {
            setPasswordError("Password is required!");
        // } else if (e.target.value !== confirmPassword ) {
        //     setPasswordError('Passwords must match')
        } else if(e.target.value.length <8) {
            setPasswordError("Password must be ateast 8 characters");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value <1) {
            setConfirmPasswordError("Password is required!");
        } else if (e.target.value !== password ) {
            setConfirmPasswordError('Passwords must match')
        } else if(e.target.value.length <8) {
            setConfirmPasswordError("Password must be ateast 8 characters");
        } else {
            setConfirmPasswordError("");
        }
    };

    return(
        <div>
            <form onSubmit={ createUser }>
                {/* <h3>{formMessage()}</h3> */}
                {hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form</h3>
                }
                <div>
                    <label>First Name: </label> 
                    <input type="text" name='firstname' value={firstname} onChange={ handleFirstName } />
                    {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" name='lastname' value={lastname} onChange={ handleLastName } />
                    {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text"  name='email' value={email} onChange={ handleEmail } />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name='password' value={password} onChange={ handlePassword } />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="password" name='confirmPassword' value={confirmPassword} onChange={ handleConfirmPassword } />
                    {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                    }
                </div>
                <input type="submit" value="Create User" onClick= {handleSubmit} />
            </form>
            <Display firstname={firstname} lastname={lastname} email={email} password={password} confirmpassword= {confirmPassword} />
        </div>
    );
};
    
export default UserForm;