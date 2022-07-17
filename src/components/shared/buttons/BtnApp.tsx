interface BtnArgs {
	title: string,
	disabled?: boolean,
	type?: string,
	handleClick?: (e?: any) => void,
}

export const BtnApp = ({ title, handleClick, disabled = false }: BtnArgs) => {
	return (
		<button 
			className="btn" 
			onClick={ handleClick }
			disabled={ disabled }
		>
			{ title }
		</button>
	)
}
