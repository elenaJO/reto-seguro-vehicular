import { useState } from 'react';

export const useForm = <T extends Object>( initialState: T) => {
  const [values, setValues] = useState(initialState);

	const reset = (newFormState = initialState) => {
		setValues( newFormState );
	}

	const handleInputChange = (value: string, name: keyof T) => {
		setValues({
			...values,
			[name]: value
		})
	}

	return {
		...values,
		formValues: values,
		handleInputChange,
		reset
	}
}