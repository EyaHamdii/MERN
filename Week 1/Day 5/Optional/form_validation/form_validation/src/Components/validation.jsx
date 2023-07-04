import React, { useReducer } from 'react';
 
const initialtState = {
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
    const [state, dispatch] = useReducer(reducer, initialtState);
 
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
 
    return (
        <div>
            {JSON.stringify(state)}
...

            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
{state.firstName.error !== null && (
        <p className="error">{state.firstName.error}</p>
      )}
            </div>
<div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </label>
{state.lastName.error !== null && (
        <p className="error">{state.lastName.error}</p>
      )}
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
                {state.email.error !== null && (
        <p className="error">{state.email.error}</p>
      )}
            </div>
        </div>
    );
}
