interface SelectArgs {
	checked?: boolean,
	handleCheckChange?: (e: any) => void,
	name?: string,
}

export const CheckBoxApp = ({ checked, handleCheckChange, name }: SelectArgs) => {
	return (
		<div className="check-box-app">
			<input
				className="check-box-app__box"
				type="checkbox" 
				id="checkApp"
				checked={ checked }
				name={ name }
				onChange={ handleCheckChange }
			/>
    	<label
				className="check-box-app__label"
				htmlFor="checkApp"
			>
			</label>
		</div>
	)
}
