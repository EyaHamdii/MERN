import React, { useState } from 'react';

const Navbar = () => {
//   const [state, setState] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <form>
      <h1>Hi {name}</h1>
      Your Name:
      <input value={name} onChange={handleChange} />
    </form>
  );
}

export default Navbar;
