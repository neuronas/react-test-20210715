import React from 'react'


const Board = ({locations}) => {

	let array = Array.from(Array(10).keys())

	return (
		<div className="board">
			{
				array.map((k,v) =>
					<span key={k}> 	
						{
							array.map((k,v) => (
									'-'
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