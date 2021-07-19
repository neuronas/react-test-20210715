import {useState, useEffect} from 'react'
import Board from './components/Board'
import Controls from './components/Controls'
import './App.css';
import {getClusters} from './services/api'

function App() {

  const [size, setSize] = useState({height: 10, width: 10}) 
  const [clusters, setClusters] = useState(null)

  const doPost = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("POST", data)
        const result = getClusters(data)
        resolve(result)
      }, 10)
    })
  }

  const sendNodes = (matrix) => {
    doPost(matrix).then((clusters) => {
      console.log("RES", JSON.stringify(clusters, null, 0))
      setClusters(clusters)
    })
  }

  return (
    <div className="container">
      <Controls size={size} setSize={setSize} />
      {
        size &&
        <Board clusters={clusters} size={size} sendNodes={sendNodes} />
      }
    </div>
  );
}

export default App;
