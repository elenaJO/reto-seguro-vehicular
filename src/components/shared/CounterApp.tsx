import { useState, useEffect } from 'react';

interface CounterArgs {
	numberAdd?: number,
	minorRank?: number,
	higherRank?: number,
	initialValue?: number,
	changeValue?: boolean,
	handleChangeValue: (e: number) => void,
}

export const CounterApp = ({ 
	numberAdd = 1,
	minorRank,
	higherRank,
	initialValue = 0,
	changeValue = false,
	handleChangeValue} : CounterArgs) => {

	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		if (changeValue) setValue(initialValue)
	}, [initialValue])
	

	const handleClick = (c: number) => {
		const newValue = value + (numberAdd * c)

		if (minorRank && c === -1 && newValue < minorRank) return true
		if (higherRank && c === 1 && newValue > higherRank) return true

		setValue(newValue);
		handleChangeValue(newValue);
	}

	return (
		<div className="counter-app">
			<button 
				className="counter-app__btn"
				onClick={ () => handleClick(-1) }
				type="button"
			>-</button>
			<span className="counter-app__text">$ { value }</span>
			<button 
				className="counter-app__btn"
				onClick={ () => handleClick(1) }
				type="button"
			>+</button>
		</div>
	)
}
