import { useState, useEffect, useRef } from "react";

function App() {
  const STARTING_TIME = 15

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(words) {
    const wordsArr = words.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  // another way of doing the function on lines 14-17

  //   function calculateWordCount(words) {
  //     const wordsArr = words.trim().split(" ")
  //     const filteredWords = wordsArr.filter(word => word !== "")
  //     return filteredWords.length
  // }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    setWordCount(0)
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
}

function endGame() {
  setIsTimeRunning(false);
  const numWords = calculateWordCount(text)
  setWordCount(numWords)
  // or can replace lines 35 & 36 w/this to make more conscise
  // setWordCount(calculateWordCount(text))
} 

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
      ref={textBoxRef} 
      onChange={handleChange} 
      value={text} 
      disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame}
        disabled={isTimeRunning}
        >
          Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
