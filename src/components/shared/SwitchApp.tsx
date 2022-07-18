interface SwitchtArgs {
	checked?: boolean,
	handleCheckChange?: (e: any) => void,
	name?: string,
	disabled?: boolean,
}

export const SwitchApp = ({ checked, handleCheckChange, name, disabled = false }: SwitchtArgs) => {
	return (
		<div className="switch-app">
			<label>
				<input 
					type="checkbox" 
					className="switch-app__input"
					checked={ checked }
					name={ name }
					disabled= { disabled }
					onChange={ handleCheckChange }
				/>
				<span className="switch-app__slider switch-app__round"></span>
			</label>
		</div>
	)
}