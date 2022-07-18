import { createSlice } from '@reduxjs/toolkit';
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
	}
})

export const { addInfoVehicle } = vehicleSlice.actions

