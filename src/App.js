// Create a react component that inputs a textarea message then performs a fetch request to localhost:3001 gets back a response as a data.message and displays that message in a box below.
import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
// Create one more textarea message.
const [message2, setMessage2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, message2}), 
      
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div className="App">
      <h1 id='header'>Programming Language Translator</h1>
      <form onSubmit={handleSubmit}>
      <textarea  className="Language" rows="5" cols="20"
          placeholder='Enter the language you want to translate to here'
          value={message2}
          onChange={(e) => setMessage2(e.target.value)}
        />
        <textarea className='Code' rows="5" cols="50"
          placeholder='Enter your code here'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
}


export default App;
