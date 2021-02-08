import React, { useState } from "react";
import "./App.css";
import living from "./assets/living.jpg";
import SearchBox from "./components/SearchBox";
import Pin from "./components/Pin";
import tableSmall from "./assets/table-small.jpg";
import lampSmall from "./assets/lamp-small.jpg";
import livingSmall from "./assets/living-small.jpg";
import chairSmall from "./assets/chair-small.jpg";

function App() {
  const pins = [
    {
      name: "table",
      price: 150,
      img: tableSmall,
      visible: false,
    },
    {
      name: "sofa",
      price: 1150,
      img: livingSmall,
      visible: false,
    },
    {
      name: "lamp",
      price: 80,
      img: lampSmall,
      visible: false,
    },
    {
      name: "chair",
      price: 150,
      img: chairSmall,
      visible: false,
    },
  ];

  const [text, setText] = useState("");
  const [furnitures, setFurnitures] = useState(pins);

  const onChangeHandler = (el) => {
    const scopedObj = furnitures;
    scopedObj.map((item) => {
      item.name.toLowerCase() === el.toLowerCase()
        ? (item.visible = true)
        : (item.visible = false);
      return item;
    });
    setText(el);
    setFurnitures(scopedObj);
  };

  const handleClick = (pinName) => {
    const newFurnitures = furnitures.map((item) => {
      item.name === pinName
        ? (item.visible = !item.visible)
        : (item.visible = false);
      return item;
    });

    setFurnitures(newFurnitures);
  };

  return (
    <div className="App">
      <SearchBox text={text} onChangeHandler={onChangeHandler} />
      <div className="image-container">
        <img className="image" src={living} alt="living-room" />
        {furnitures.map((pin) => (
          <Pin key={pin.name} {...pin} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
