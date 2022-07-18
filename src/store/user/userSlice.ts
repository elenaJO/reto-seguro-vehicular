import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../interfaces/auth';

const initialState: User = {
	id: null,
	documentNumber: '',
	phone: '',
	name: '',
	email: ''
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<User>) => {
			state.id = action.payload.id;
			state.documentNumber = action.payload.documentNumber;
			state.phone = action.payload.phone;
			state.name = action.payload.name;
			state.email = action.payload.email;
		},
		resetAuth: (state) => {
			state = {
				id: null,
				documentNumber: '',
				phone: '',
				name: '',
				email: '',
			}
		}
	}
})

export const { login, resetAuth } = userSlice.actions

