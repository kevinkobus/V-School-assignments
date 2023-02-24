import { useState } from "react";
import "./App.css";

function App() {
  const [newName, setNewName] = useState("");

  const [nameList, setNameList] = useState(["Somebody", "Somebody else"]);

  function handleChange(event) {
    setNewName(event.target.value)    
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNameList(prevNameList => [...prevNameList, newName])
    setNewName("")
  }

  const people = nameList.map((person, id) => <li key={id}>{person}</li>);

  return (
    <div className="App">
      <form className="name-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Enter full name"
          name="name"
          onChange={handleChange}
          value={newName}
        />
        <button className="form-submit">Add Name</button>
      </form>
      <h1>{newName}</h1>
      <ol>{people}</ol>
    </div>
  );
}

export default App;
