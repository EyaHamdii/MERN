import React, { Component } from 'react';
    
class MyComponents extends Component {
    constructor(props) {
        super(props);
        this.state= {
          // person:this.props.person,
                age: this.props.age
              };
}
    add(){
        // this.setState({
          // person:{
          //   ...this.state.person,
          
        // age: this.props.age +1
            this.setState((prevState) => ({
      age: prevState.age + 1
    }))
          }
        
    render() {
        return (<div>

                    <h1>{this.props.firstName},{this.props.lastName}</h1> 
                    <p>age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    {/* <p>{JSON.stringify(this.state)}</p> */}
                    <button onClick={ ()=>  this.add()}>Birthday button for {this.props.firstName}</button>
            </div>);}
    }
export default MyComponents;
// import React, { Component } from 'react';

// class MyNewComponents extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       age: this.props.age
//     };
//   }

//   add() {
//     this.setState((prevState) => ({
//       age: prevState.age + 1
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.props.firstName}, {this.props.lastName}</h1>
//         <p>Age: {this.state.age}</p>
//         <p>Hair Color: {this.props.hairColor}</p>
//         <button onClick={() => this.add()}>Birthday button for {this.props.firstName}</button>
//       </div>
//     );
//   }
// }

// export default MyNewComponents;
