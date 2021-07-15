import React from 'react'



const Board = ({locations, size, sendNodes}) => {
	let width = Array.from(Array(size.width).keys())
	let height = Array.from(Array(size.height).keys())

	let onClick = (e) => {
		let elem = e.target
		// toggle
		elem.innerHTML = elem.innerText === "-" ? 'o' : '-'
	}

	const doSubmitt = () => {
		sendNodes([])
	}

	return (
		<div className="board">
			{
				height.map((k,v) =>
					<span key={k}> 	
						{
							width.map((k,v) => (
									<div className="node" key={k} onClick={onClick}>-</div>
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