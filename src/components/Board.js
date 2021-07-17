import {useEffect, useState} from 'react'


const Board = ({clusters, size, sendNodes}) => {

	const [showClusters, setShowClusters] = useState(null)
	const [reRender, setReRender] = useState(false)
	const [matrix, setMatrix] = useState(Array(size.height).fill(0).map(() => Array(size.width).fill(0)))

	useEffect(() => {
		doReset()
	}, [size])

	useEffect(() => {
		if (clusters) {
			drawClusters(clusters)
		}
	}, [clusters])

	const drawClusters = (clusters) => {
		let drawMatrix = matrix

		for (let i=0; i<clusters.length; i++) {
			for (let j=0; j<clusters[i].length; j++) {
				const node = clusters[i][j]
				drawMatrix[node[1]][node[0]] = i+1
			}
		}
		setMatrix(drawMatrix)
		setShowClusters(true)
	}

	let onClick = (e, h, v) => {
		if (showClusters) return

		let tempMatrix = matrix

		let node = tempMatrix[h][v]
		tempMatrix[h][v] = node == 1 ? 0 : 1

		setMatrix(tempMatrix)

		let elem = e.target
		// toggle
		elem.innerHTML = elem.innerText === "-" ? 'o' : '-'
	}

	const doSubmitt = () => {
		sendNodes(matrix)
	}

	const doReset = () => {
		setMatrix(Array(size.height).fill(0).map(() => Array(size.width).fill(0)))
		setReRender(true)	
		setShowClusters(false)

		setTimeout(() => {
			setReRender(false)
		}, 50)	
	}

	return (
		<div>
			<div className="main">
				<div className="board">
				{ !reRender &&
					matrix.map((v, vKey) =>
						<div key={vKey}> 	
							{
								matrix[vKey].map((hValue, hKey) => (
										<div className="node" key={hKey} onClick={(e) => onClick(e, vKey, hKey)}>{`${!showClusters ? '-' : (hValue ? hValue :' ')}`}</div>
									)
								)
							}
						</div> 
					)
				}
				</div>
			</div>
			<div>
				<button onClick={doSubmitt}>Submit</button>
				<button onClick={doReset}>Restart</button>
			</div>
			
		</div>
	)
}

export default Board
