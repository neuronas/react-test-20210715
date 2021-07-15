

import {useState, useEffect} from 'react'
import Board from './components/Board'
import './App.css';


function App() {

  const [size, setSize] = useState(null) 
  useEffect(() => {
    // set data when endpoint response
    setSize({height: 5, width: 10})
  }, []) 

  const doPost = (data) => {
    setTimeout(() => {
      console.log("POST", data)
      return "Success"
    }, 1000)
  }

  return (
    <div className="container">
      <div className="main">
          {
            size &&
            <Board size={size} sendNodes={doPost} />
          }
      </div>
    </div>
  );
}

export default App;
