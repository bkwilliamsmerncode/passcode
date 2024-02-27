import React, { useState } from "react"
import './App.css';

function App() {


  const [data, setData] = useState({
    passcode: "12345",
    input: "",
    color: ""
  })


  const handleClick = (e) => {
    // e.preventDefault()
    setData(prev => ({
      ...prev,
      input: prev.input + e.target.value
    }))


  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    if (data.passcode === data.input) {
      setData(prev => ({
        ...prev,
        color: "green"
      }))
    } else {
      setData(prev => ({
        ...prev,
        color: "red"
      }))
    }
    setTimeout(() => {
      setData(prev => ({
        ...prev, input: "", color: ""
      }))
    }, 3000)
  }



  return (
    <>
      <div id="main">
        <h1>Secure Page</h1>
        <h2>Passcode Required:</h2>
        <p>Passcode = 12345, try the wrong passcode</p>
        <br />
        <div id="display" ><h3 style={{ color: !data.color ? "white" : data.color }}>{data.input.split("").map(i => "*")}</h3></div>
        <br />
        <div id="container">
          <button type="click" value={"1"} className="btn" onClick={(e) => handleClick(e)}>1</button>
          <button type="click" value={"2"} className="btn" onClick={(e) => handleClick(e)}>2</button>
          <button type="click" value={"3"} className="btn" onClick={(e) => handleClick(e)}>3</button>
          <button type="click" value={"4"} className="btn" onClick={(e) => handleClick(e)}>4</button>
          <button type="click" value={"5"} className="btn" onClick={(e) => handleClick(e)}>5</button>
          <button type="click" value={"6"} className="btn" onClick={(e) => handleClick(e)}>6</button>
          <button type="click" value={"7"} className="btn" onClick={(e) => handleClick(e)}>7</button>
          <button type="click" value={"8"} className="btn" onClick={(e) => handleClick(e)}>8</button>
          <button type="click" value={"9"} className="btn" onClick={(e) => handleClick(e)}>9</button>
          <button type="click" value={"0"} className="btn" onClick={(e) => handleClick(e)}>0</button>
        </div>
        <button id="subbtn" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
    </>
  );
}

export default App;
