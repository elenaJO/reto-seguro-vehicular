import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/userSlice'
import { vehicleSlice } from './vehicle/vehicleSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    vehicle: vehicleSlice.reducer,
  },
})