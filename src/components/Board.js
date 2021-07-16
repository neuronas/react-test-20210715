import React from 'react'



const Board = ({locations, size, sendNodes}) => {

	const matrix = Array(size.height).fill(0).map(() => Array(size.width).fill(0));

	let onClick = (e, h, v) => {

		let node = matrix[h][v]
		matrix[h][v] = node == 1 ? 0 : 1

		let elem = e.target
		// toggle
		elem.innerHTML = elem.innerText === "-" ? 'o' : '-'
	}

	const doSubmitt = () => {
		sendNodes(matrix).then((a) => {
			console.log("RES", a)
		})
	}

	return (
		<div className="board">
			{
				matrix.map((vv, kv) =>
					<span key={kv}> 	
						{
							matrix[kv].map((vh, kh) => (
									<div className="node" key={kh} onClick={(e) => onClick(e, kv, kh)}>-</div>
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