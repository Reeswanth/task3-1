import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  // Function to count words
  const countWords = (text) => text.trim().split(/\s+/).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleWordCount = () => {
    const count = countWords(text);
    setWordCount(count);
  };

  return (
    <div className="App">
      <h1>Word Count Calculator</h1>
      <textarea
        placeholder="Enter text..."
        rows="6"
        value={text}
        onChange={handleTextChange}
      />
      <button onClick={handleWordCount}>Count Words</button>
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default App;
