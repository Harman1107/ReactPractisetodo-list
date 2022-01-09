import React, { useState } from "react";

function App() {
  const [inputText, setinputText] = useState("");
  const [newTexts, setNewText] = useState([]);
  function AddText(event) {
    const text = event.target.value;
    setinputText(text);
  }

  function setText() {
    setNewText((prevItems) => {
      return [...prevItems, inputText];
    });
    setinputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={AddText} value={inputText} />
        <button onClick={setText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newTexts.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
