interface RadioBtnArgs {
	optionalClass?: string,
	name?: string,
	value?: string | number,
	handleCheckChange?: (e: any) => void,
	checked?: boolean,
}

export const RadioBtnApp = ({ optionalClass, value, name, handleCheckChange, checked }: RadioBtnArgs) => {
	return (
		<div className={`${optionalClass} radio-btn-app`}>
			<input
				className="radio-btn-app__radio"
				type="radio" 
				id={`${name}-${value}`}
				value={ value }
				name={ name }
				checked={ checked }
				onChange={ handleCheckChange }
			/>
    	<label
				className="radio-btn-app__label"
				htmlFor={`${name}-${value}`}
			>{ value }
			</label>
		</div>
	)
}
