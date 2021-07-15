

import {useState, useEffect} from 'react'
import Board from './components/Board'
import './App.css';


function App() {

  const [size, setSize] = useState(null) 
  useEffect(() => {
    // set data when endpoint response
    setSize({height: 10, width: 10})
  }, []) 

  return (
    <div className="container">
      <div className="main">
          {
            size &&
            <Board size={size} />
          }
      </div>
    </div>
  );
}

export default App;
