import React from 'react'



const Board = ({locations}) => {

	let array = Array.from(Array(10).keys())

	let onClick = (e) => {
		let elem = e.target
		// toggle
		elem.innerHTML = elem.innerText === "-" ? 'o' : '-'
	}

	return (
		<div className="board">
			{
				array.map((k,v) =>
					<span key={k}> 	
						{
							array.map((k,v) => (
									<div className="node" key={k} onClick={onClick}>-</div>
								)
							)
						}
						<br />
					</span> 
				)
			}
		</div>		
	)
}


export default Board