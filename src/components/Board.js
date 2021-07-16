import {useEffect, useState} from 'react'


const Board = ({clusters, size, sendNodes}) => {

	const [flag, setFlag] = useState(null)
	const [matrix, setMatrix] = useState(Array(size.height).fill(0).map(() => Array(size.width).fill(0)))

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
		setFlag(true)
	}

	let onClick = (e, h, v) => {
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

	return (
		<div className="board">
			{
				matrix.map((v, vKey) =>
					<span key={vKey}> 	
						{
							matrix[vKey].map((hValue, hKey) => (
									<div className="node" key={hKey} onClick={(e) => onClick(e, vKey, hKey)}>{`${!flag ? '-' : (hValue ? hValue :' ')}`}</div>
								)
							)
						}
						<br />
					</span> 
				)
			}
			<button className="btn-submit" onClick={doSubmitt}>SUBMIT</button>
		</div>		
	)
}


export default Board