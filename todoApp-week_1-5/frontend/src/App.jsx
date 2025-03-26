import { useState } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo.jsx'; // Import CreateTodo component
import { Todos } from './components/Todos.jsx'; // Import Todos component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <CreateTodo /> {/* ✅ Correct component usage */}
        <Todos /> {/* ✅ Correct component usage */}
      </div>
    </>
  );
}

export default App;
