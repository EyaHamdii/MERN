
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

