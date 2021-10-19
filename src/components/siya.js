 import React from 'react'
 
 //FOR CLASS COMPONENT
//import React, {Component} from 'react'

// class Welcome extends Component{
//     render() {
//         return <h1>My class components</h1>
        
//     }
// }
//export default Welcome;


//=============================================================
// //FOR FUNCTIONAL COMPONENT
// import React from 'react'

// function Greet() {
//     return <h1>Hello Marsiya!!</h1>
// }

// const Greet = () => <h1>Hello Marsiya!!</h1>;

// //in other to use it we have to export and import it in to our app.js and use it
// export default Greet;
//=============================================================


// //JSX
//create element without JSX
// const Hello = () => {
//     return React.createElement('div', {id:"hello",className:"dummyClass"},React.createElement('h1','null','Hello Marsiya'))
// }
// export default Hello;

//=============================================================
//PROPS
//you can name it anything but the convention is props. It is used as a parameter and the html attribute is attached to it

//if you dont know the attribute and want to use the chilren or inner html. dont forget to wrap it all in a div tag

//we can also access the props in class components with 'this' keyword this.props.name and this.props.heroName

// const Greet = (props) => {
//     return (
//         <div>
//             <h1>Hello {props.name}!! a.k.a {props.heroName}</h1>
//         {props.children}
//         </div>
        
//     )
// }

//  export default Greet;

//=============================================================
//STATE

// const Greet = (props) => {
//     return (
//         <div>
//             <h1>Welcome Visitor</h1>
//         </div>  
//     )
// }


//for state use the class component
//add an onclick function to the button write your function below after the state declaration. use the set state  method which takes in an object to set

class Greet extends React.Component {
  constructor() {
    super();
      this.state = {
        message : 'Welcome, Akwaaba!'
        }
    }
    
    changeMessage() {
        this.setState({
            message: "Akwaaba to Ghana!"
        })
    }
  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
             <button onClick = {()=> this.changeMessgae()}>click</button>
      </div>
    );
  }
};

export default Greet;



//=============================================================
//=============================================================
