import "./App.css";
import React, { useState, useEffect } from "react";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [buttonSide, setButtonSide] = useState("left");

  useEffect(() => {
    console.log("Componente cargado correctamente");
    handleActive();
  }, []);

  useEffect(() => {
    checkAs();
  }, [inputValue]);

  const handleInput = (e) => {
    let { value } = e.target;
    setInputValue(value);
  };

  const checkAs = () => {
    if (inputValue.toLowerCase().includes("a")) {
      document.querySelector("input").style.background = "green";
    } else {
      document.querySelector("input").style.background = "inherit";
    }
  };
  const sendInput = (e) => {
    console.log(inputValue);
    clearAll();
  };

  const clearAll = () => {
    document.querySelector("input").value = "";
    document.querySelector("input").style.background = "inherit";
  };
  const checkSides = () => {
    if (buttonSide === "left") {
      document.querySelector(".left-button").classList.add("active");
      document.querySelector(".right-button").classList.remove("active");
    } else {
      document.querySelector(".left-button").classList.remove("active");
      document.querySelector(".right-button").classList.add("active");
    }
  };
  const handleActive = () => {
    buttonSide === "left" ? setButtonSide("right") : setButtonSide("left");
    checkSides();
  };

  return (
    <div className="App">
      <div className="nav-buttons">
        <button className=" left-button" onClick={handleActive}>
          {buttonSide === "right" ? "Active" : "Inactive"}
        </button>
        <button className=" right-button" onClick={handleActive}>
          {buttonSide === "left" ? "Active" : "Inactive"}
        </button>
        <div className="separator"></div>
      </div>
      <main>
        <div className="form-container">
          <input type="text" onChange={handleInput} />
          <button className="active" onClick={sendInput}>
            ENVIAR
          </button>
        </div>
        <div className="image-logo">
          <img src="./logo192.png" alt="logo"></img>
        </div>
      </main>
    </div>
  );
};

export default App;
