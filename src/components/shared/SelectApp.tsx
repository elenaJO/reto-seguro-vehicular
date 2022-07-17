interface SelectArgs {
	optionalClass?: string
	value?: string | number,
	handleSelectChange?: (e: any) => void,
	name?: string,
	items?: any[],
	placeholder ?: string,
	hasError?: boolean;
	errorMessage?: string;
	group?: boolean,
}

export const SelectApp = ({ optionalClass, value, handleSelectChange, name, items, placeholder, hasError, errorMessage, group}: SelectArgs) => {
	return (
		<div className={`${optionalClass} content-select`}>
			<select 
				name={ name }
				className={`content-select__select ${group ? 'group' : ''}`}
				value={ value }
				onChange={ handleSelectChange }
			>
				<option value="">{ placeholder || 'Seleccione una opción'}</option>
				{items && items.map(item => (
					<option
						key={`key-${item.name}-${item.id}`}
						value={item.id}
					>{item.name}</option>
				))}
			</select>
			<i></i>
			<p className="input-app__has-error">{hasError ? errorMessage : ''}</p>
		</div>
	)
}
