import React, { useState } from 'react';

const Tabs = (props) => {


  const handleForm = (e) => {
    e.preventDefault();
     ("Tab 1 content is showing here")
  };
  const handleForm1 = (e) => {
    e.preventDefault();
     ("Tab 1 content is showing here")
  };
  const handleForm2 = (e) => {
    e.preventDefault();
     ("Tab 1 content is showing here")
  };



  return (
    <>
      <form onSubmit={handleForm}>
        <input type="submit" value="Tab 1" />

      </form>
      <form onSubmit={handleForm1}><input type="submit" value="Tab 2" /></form>
      <form onSubmit={handleForm2}><input type="submit" value="Tab 3" /></form>

    </>
  );
};

export default Tabs;