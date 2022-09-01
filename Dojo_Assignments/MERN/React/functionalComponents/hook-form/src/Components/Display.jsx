import React from "react";

const Display= (props) => {
    return (
        <div>
            <h1>Display Information</h1>
            <p>Username: {props.username}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Confirm Password: {props.confirmpassword}</p>
        </div>
    )
}

export default Display