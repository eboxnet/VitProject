import React, { useState } from "react";
import "./App.css";
import living from "./assets/living.jpg";
import SearchBox from "./components/SearchBox";
import PinTable from "./components/PinTable.jsx";
import PinLamp from "./components/PinLamp";
import PinChair from "./components/PinChair.jsx";
import PinSofa from "./components/PinSofa.jsx";

function App() {
  const [text, setText] = useState("");
  const [toggleSofa, setToggleSofa] = useState(false);
  const [toggleTable, setToggleTable] = useState(false);
  const [toggleLamp, setToggleLamp] = useState(false);
  const [toggleChair, setToggleChair] = useState(false);

  const onChangeHandler = (e) => {
    setToggleSofa(e.target.value === "sofa"); //as ternary
    setText(e.target.value);
    setToggleTable(e.target.value === "table"); //as ternary
    setText(e.target.value);
    setToggleLamp(e.target.value === "lamp"); //as ternary
    setText(e.target.value);
    setToggleChair(e.target.value === "chair"); //as ternary
    setText(e.target.value);
  };

  const handleClick = (el) => {
    console.log(el);
    switch (el) {
      case "sofa":
        setToggleSofa(!toggleSofa);
        setToggleLamp(false);
        setToggleTable(false);
        setToggleChair(false);
        break;
      case "table":
        setToggleTable(!toggleTable);
        setToggleSofa(false);
        setToggleLamp(false);
        setToggleChair(false);
        break;
      case "lamp":
        setToggleLamp(!toggleLamp);
        setToggleSofa(false);
        setToggleTable(false);
        setToggleChair(false);
        break;
      case "chair":
        setToggleChair(!toggleChair);
        setToggleSofa(false);
        setToggleTable(false);
        setToggleLamp(false);
        break;
      default:
        return true;
    }
  };

  return (
    <div className="App">
      <SearchBox text={text} onChangeHandler={onChangeHandler} />
      <div className="image-container">
        <img className="image" src={living} alt="living-room" />
        <PinSofa handleClick={handleClick} toggleSofa={toggleSofa} />
        <PinTable handleClick={handleClick} toggleTable={toggleTable} />
        <PinLamp handleClick={handleClick} toggleLamp={toggleLamp} />
        <PinChair handleClick={handleClick} toggleChair={toggleChair} />
      </div>
    </div>
  );
}

export default App;
