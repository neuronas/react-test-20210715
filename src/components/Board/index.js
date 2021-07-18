import {useEffect, useState} from 'react'
import Grid from './Grid'

const Board = ({clusters, size, sendNodes}) => {

	const [showClusters, setShowClusters] = useState(false)
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

	let handleClick = (e, h, v) => {
		if (showClusters) return

		let tempMatrix = [...matrix]
		let node = matrix[h][v]
		tempMatrix[h][v] = node == 1 ? 0 : 1
		setMatrix(tempMatrix)
		let elem = e.target
	}

	const doSubmitt = () => {
		sendNodes(matrix)
	}

	const doReset = () => {
		setMatrix(Array(size.height).fill(0).map(() => Array(size.width).fill(0)))
		setShowClusters(false)
	}

	return (
		<div>
			<div className="main">
				{
					<Grid matrix={matrix} onClick={handleClick} showClusters={showClusters} />
				}
			</div>
			<div>
				<button onClick={doSubmitt}>Submit</button>
				<button onClick={doReset}>Restart</button>
			</div>
			
		</div>
	)
}

export default Board
