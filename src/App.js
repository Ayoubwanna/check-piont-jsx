import React from 'react'
import './App.css';
import JSXImage from './image/JSX_Logo.jpg'


function App() {

  const name = "Hello react"
  const myStyle = {
    color: "black"
  }

  return (

    /* JSX code */
    <div className="App">
      <p className="test-paragraph">my app</p>

      {/* use expression to view data */}
      <p style={{ color: "red", margin: "0 30%", backgroundColor: "yellow" }}>{name}</p>
      <p style={myStyle}>{ }</p>

  

       
      <img
        className="react-logo"
        src="../public/image/OIP.svg"
        alt="react"
      />
      <br />

       
      <img src="OIP.svg" alt="" style={{ width: "50%" }} />
      <br /><br /><br />
      <img src={JSXImage} alt="" style={{ width: "30%" }} />
    </div>
 );
}

  
export default App;
