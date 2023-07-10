// import React, {useState} from 'react'




// const PeopleForm = (props) => {
//     const [favColor, setFavColor] = useState("#ffffff");
//     const [displayColor, setDisplayColor] = useState(null);
// const handleForm = (e) =>{
//     e.preventDefault();
//     const newPerson = {
//         favColor,}setDisplayColor(favColor);
//     };
//         return (
//             <>

//                 Color: <input type="text"onChange={ (e) => setFavColor(e.target.value) }  /><br />

        
//         <input type="submit" value="Add" onClick={handleForm} />
//                 <form onSubmit={(e)=>{handleForm(e)}}>
//                 <input onChange={(e)=>{setFavColor(e.target.value)}} type="color" value={favColor}/> <br />
                
        
//                 </form>
//                 {displayColor && (
//         <>
//         <div style={{ backgroundColor: displayColor, width: "100px", height: "100px" }}></div>
//         <p>{displayColor}</p>
//         </>
//     )}
        

//             </>  
//         )
       
       
       
// }
        
// export default PeopleForm
// import React, { useState } from 'react';

// const PeopleForm = (props) => {
//   const [favColor, setFavColor] = useState("#ffffff");
//   const [displayColor, setDisplayColor] = useState("");

//   const handleForm = (e) => {
//     e.preventDefault();
//     setDisplayColor(favColor);
//   };

//   return (
//     <>
//       <form onSubmit={handleForm}>
//         Color: <input type="text" onChange={(e) => setFavColor(e.target.value)} /><br />
//         <input type="submit" value="Add" />
//       </form>
//       {displayColor && (
//         <>
//           <div style={{ backgroundColor: displayColor, width: "100px", height: "100px" }}></div>
//         </>
//       )}
//     </>
//   );
// };

// export default PeopleForm;
import React, { useState } from 'react';

const PeopleForm = (props) => {
  const [favColor, setFavColor] = useState("");
  const [colors, setColors] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    if (favColor !== "") {
      setColors((prevColors) => [...prevColors, favColor]);
      setFavColor("");
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        Color: <input type="text" value={favColor} onChange={(e) => setFavColor(e.target.value)} /><br />
        <input type="submit" value="Add" />
      </form>
      {colors.map((color, index) => (
        <div key={index} style={{ backgroundColor: color, width: "100px", height: "100px", display: "inline-block", marginRight: "10px" }}></div>
      ))}
    </>
  );
};

export default PeopleForm;

