import {useState, useEffect} from 'react'
import Board from './components/Board'
import './App.css';

function App() {

  const [size, setSize] = useState(null) 
  const [clusters, setClusters] = useState(null)

  useEffect(() => {
    // set data when endpoint send response
    setSize({height: 10, width: 10})
  }, []) 

  const doPost = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = getClusters(data)
        console.log("POST", result)
        resolve(result)
      }, 500)
    })
  }

  const sendNodes = (matrix) => {

    doPost(matrix).then((clusters) => {
      console.log("RES", clusters)
      setClusters(clusters)
    })

  }

  const getClusters = (matrix) => {

    let count = 0
    let clusters = []
    let visited = Array(matrix.length).fill(0).map(() => Array(matrix[0].length).fill(0));

    const siblingExist = ([x,y]) => {
      if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length) {
        if (matrix[x][y] == 1) {
          return true
        }
      }
      return false
    }

    // find siblings
    const findSibling = ([x,y]) => {
      if (visited[x][y]) {
        return
      }

      visited[x][y] = 1

      // add nodes to cluster
      if (!clusters[count-1]) {
        clusters[count-1] = [[y,x]]
      } else {
        clusters[count-1].push([y,x])
      }


      for (let v=-1; v<2; v++ ) {
        for (let h=-1; h<2; h++) {
          if (v == 0 && h == 0) {
            continue
          }
          const nextCoords = [x+v,y+h]
          if (siblingExist(nextCoords)) {
            findSibling(nextCoords)
          }
        }
      }
    }

    // find clusters
    for (let i=0; i<matrix.length; i++) {
      for (let j=0; j<matrix[0].length; j++) {
        if (matrix[i][j]==1 && !visited[i][j]) {
          count++
          findSibling([i,j])
        }
      }
    }
    return clusters
  }



  return (
    <div className="container">
      <div className="main">
          {
            size &&
            <Board clusters={clusters} size={size} sendNodes={sendNodes} />
          }
      </div>
    </div>
  );
}

export default App;
