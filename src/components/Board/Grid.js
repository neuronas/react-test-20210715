import {useEffect} from 'react'
const Grid = ({matrix, onClick, showClusters}) =>  {

	return (
		<div className="board">
			{
				matrix.map((v, vKey) => (
					<div className="row" key={vKey}> 	
						{
							matrix[vKey].map((hValue, hKey) => (
									<div className="node" key={hKey} onClick={(e) => onClick(e, vKey, hKey)}>{`${!showClusters ? (hValue ? 'o' : '-') : (hValue ? hValue :' ')}`}</div>
							))
						}
					</div> 
				))
			}
		</div>
	)
}

export default Grid
