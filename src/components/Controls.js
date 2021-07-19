import {useState} from 'react'

const Controls = ({size, setSize}) => {

	const [values, setValue] = useState({height: size.height, width: size.width})

	const doSet = (size) => {
		setSize(values)
	}

	const handleChange = (e) => {
		e.preventDefault()

		const name = e.target.name
		const val = e.target.value
		setValue({...values, [name]: Number(val) })
	}

	return (
			<div>
				<label htmlFor="height">height</label>
				<input type="number" id="height" value={values.height} onChange={handleChange}/>
				<label htmlFor="width">width</label>
				<input type="number" id="width" value={values.width} onChange={handleChange}/>
				<button onClick={doSet}>Set</button>
			</div>
	)
}

export default Controls