import { useState } from "react";
import "./App.css";

function App() {
  const [newName, setNewName] = useState("");

  const [nameList, setNameList] = useState(["Somebody", "Somebody else"]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewName((prevNewName) => {
      return {
        ...prevNewName,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNameList((prevNameList) => {
      return {
        ...prevNameList,
        newName,
      };
    });
  }

const peopleList = nameList.map(person => <li key={person}>{person}</li>)

  return (
    <div className="App">
      <form className="name-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Enter Full Name"
          name="name"
          onChange={handleChange}
          value={newName}
        />
        <button className="form-submit">Submit</button>
      </form>
      <h1>{}</h1>
      <ol>
        {peopleList}
      </ol>
    </div>
  );
}

export default App;
