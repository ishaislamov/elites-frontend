import { configureStore } from '@reduxjs/toolkit'
import planeSlice from './slices/planeSlice';
import onePlaneSlice from './slices/onePlaneSlice'

export const store = configureStore({
    reducer: {
        planes: planeSlice,
        plane: onePlaneSlice,
    }
});

