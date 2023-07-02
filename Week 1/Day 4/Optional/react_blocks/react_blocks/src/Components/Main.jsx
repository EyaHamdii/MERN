import React from 'react';

const Main = (props) => {
const myStyle = {
    width:'20cm',
    height:'18cm',
    // display:'flex',
    backgroundColor: '#e06666'
};

return <div style={myStyle}>{props.children}</div>;
};

export default Main;
