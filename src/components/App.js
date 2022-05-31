import { useEffect } from 'react';
import TaskList from './TaskList';
import Header from './Header';
import '../App.css';

const API = 'http://localhost:9292'

function App() {
  
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
