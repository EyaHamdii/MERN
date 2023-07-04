// import React, { useReducer } from 'react';
//  
// const initialtState = {
//         firstName: {
//             value: '',
//             error: null
//         },
//         lastName: {
//             value: '',
//             error: null
//         },
//         email: {
//             value: '',
//             error: null
//         }
//     };

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.type]: action.payload
//     };
// }
//  
// export default () => {
//     const [state, dispatch] = useReducer(reducer, initialtState);
//  
//     function handleChange(e) {
//         const { name, value } = e.target;
//         dispatch({
//             type: name,
//             payload: value
//         });
//     }
//  
//     return (
//         <div>
//             {JSON.stringify(state)}
// ...

//             <div>
//                 <label>
//                     <span>First Name:</span>{' '}
//                     <input
//                         name="firstName"
//                         value={state.firstName}
//                         onChange={handleChange}
//                     />
//                 </label>
// {state.firstName.error !== null && (
//         <p className="error">{state.firstName.error}</p>
//       )}
//             </div>
// <div>
//                 <label>
//                     <span>Last Name:</span>{' '}
//                     <input
//                         name="lastName"
//                         value={state.lastName}
//                         onChange={handleChange}
//                     />
//                 </label>
// {state.lastName.error !== null && (
//         <p className="error">{state.lastName.error}</p>
//       )}
//             </div>
//             <div>
//                 <label>
//                     <span>Email:</span>{' '}
//                     <input
//                         name="email"
//                         value={state.email}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 {state.email.error !== null && (
//         <p className="error">{state.email.error}</p>
//       )}
//             </div>
//         </div>
//     );
// }
import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    console.log('Form submitted:', formData);
    // Reset form data
    setFormData({
      name: '',
      email: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
