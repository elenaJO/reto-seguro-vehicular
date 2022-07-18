import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Vehicle } from '../../interfaces/vehicle';

const initialState: Vehicle = {
	brandCar: '',
	license: '',
	yearCar: '',
	modelCar: '',
	coverageAmount: 12480,
	coverages: [
		'trafficAccident'
	]
}

export const vehicleSlice = createSlice({
	name: 'vehicle',
	initialState,
	reducers: {
		addInfoVehicle: (state, action) => {
			state.brandCar = action.payload.brandCar;
			state.license = action.payload.license;
			state.yearCar = action.payload.yearCar;
			state.modelCar = action.payload.modelCar;
		},
		setCoverageAmount: (state, action: PayloadAction<number>) => {
			state.coverageAmount = action.payload;
		},
		addCoverageAmount: (state, action: PayloadAction<number>) => {
			state.coverageAmount = state.coverageAmount + action.payload;
		},
		toggleCoverages: (state, action) => {
			if (action.payload.value && !state.coverages.includes(action.payload.name)) {
				state.coverages.push(action.payload.name)
			} else if (!action.payload.value) {
				state.coverages = state.coverages.filter(c => c !== action.payload.name)
			}
		}
	}
})

export const { setCoverageAmount, addCoverageAmount, addInfoVehicle, toggleCoverages } = vehicleSlice.actions
