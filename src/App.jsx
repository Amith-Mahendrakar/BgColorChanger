import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="outer-container" style={{ backgroundColor: color }}>
        <div className="container">
          <div
            className="box"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            <p>Red</p>
          </div>
          <div
            className="box"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            <p>Yellow</p>
          </div>
          <div
            className="box"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            <p>Green</p>
          </div>
          <div
            className="box"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            <p>Blue</p>
          </div>
          <div
            className="box"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => setColor("black")}
          >
            <p>Black</p>
          </div>
          <div
            className="box"
            style={{ backgroundColor: "lightgreen", fontSize: "0.6em" }}
            onClick={() => setColor("lightgreen")}
          >
            <p>Light Green</p>
          </div>
          <div
            className="box"
            style={{ backgroundColor: "cyan" }}
            onClick={() => setColor("cyan")}
          >
            <p>Cyan</p>
          </div>
          <div
            className="box"
            style={{ backgroundColor: "gray" }}
            onClick={() => setColor("gray")}
          >
            <p>Gray</p>
          </div>
          <div
            className="box"
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")}
          >
            <p>Brown</p>
          </div>
          <div
            className="box"
            style={{ backgroundColor: "violet" }}
            onClick={() => setColor("violet")}
          >
            <p>Violet</p>
          </div>
          <div
            className="box"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            <p>Purple</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
