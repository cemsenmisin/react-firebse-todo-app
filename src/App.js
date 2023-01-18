import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState(['abc', 'dfg']);
  const [input, setInput] = useState('');

    // when the app loads we need to listen to the database and fetch new todos as they gert added/removed
  useEffect(() => {   
    // this code here... fires when the app.js loads
    db.collection('todos').onSnapshot(snapShot => {
      console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click
    event.preventDefault(); // Iw will stop the Refresh
    console.log('Im working!!')
  setTodos([...todos, input]);
  setInput('');  // clear up the input after hitting submit
}
  return (
    <div className="App">
     <h1>Hello World</h1>
     <form>
         
    <FormControl>
      <InputLabel>Write a todo</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)}/>
    </FormControl>
      
          
    <Button disabled={!input} variant="contained" onClick={addTodo} color="primary">
      Add Todo
      </Button>
        {/*<button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
         //<li>{todo}</li>
        ))}
      </ul>
    
    </div>
  );
}

export default App;
