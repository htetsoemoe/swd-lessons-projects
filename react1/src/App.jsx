import React from "react";
// import "./App.css";
import "./styles.css";
import Hello from "./Hello";

const App = () => {
  const array = ["Super Man", "Bat Man", "Iron Man"];
  const sayHello = () => console.log("Hello!!");

  return (
    <div>
      <h1>Hello React with Vite</h1>

      <button onClick={sayHello}>Say Hello</button>

      <h1>{true ? "Yes! True..." : "Ahh! False..."}</h1>
      <h1>{true && "Hey There!"}</h1>

      <Hello />

      <div>
        {array.map((item, i) => (
          <div className="myCard" key={i}>
            <img src="./product.jpg" style={{width: "250px"}} alt="" />
            <h1 className="heading">Custom Bike</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam!</p>
          </div>
        ))}

        <p className="text-black-50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, quam.
        </p>
      </div>
    </div>
  )
}

export default App;
