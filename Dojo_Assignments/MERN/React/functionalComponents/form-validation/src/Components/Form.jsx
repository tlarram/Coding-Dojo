import React, { useReducer } from 'react';
 
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};
 
function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}
 
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
 
    return (
        <div>
            {/* {JSON.stringify(state)} */}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastName"
                        value={}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button>Submit</button>
        </div>
    );
}