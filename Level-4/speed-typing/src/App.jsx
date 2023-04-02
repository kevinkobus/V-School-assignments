import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(words) {
    const wordsArr = words.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  // another way of doing the above function

//   function calculateWordCount(words) {
//     const wordsArr = words.trim().split(" ")
//     const filteredWords = wordsArr.filter(word => word !== "")
//     return filteredWords.length
// }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: ???</h4>
      <button onClick={() => console.log(calculateWordCount(text))}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
