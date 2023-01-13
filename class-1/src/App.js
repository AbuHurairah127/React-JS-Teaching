import "./App.css";
import Component from "./component";
import { useState } from "react";
function App() {
  const [name, setName] = useState({
    name: "",
    age: 0,
  });
  const textChangingHandler = (e) => {
    console.log("You are writing in the text field");
    setName({ ...name, [e.target.name]: e.target.value });
    console.log(name);
  };
  const onSubmit = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
    console.log(name);
    console.log("in submit function");
  };
  return (
    <div className="App">
      <input
        type="text"
        name="name"
        value={name.name}
        onChange={textChangingHandler}
      />
      <input
        type="number"
        value={name.age}
        name="age"
        onChange={textChangingHandler}
      />
      {/* <p>name:{name}</p> */}
      <button type="submit" onClick={onSubmit}>
        Click me
      </button>
    </div>
  );
}

export default App;
