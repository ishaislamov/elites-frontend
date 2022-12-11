import { configureStore } from '@reduxjs/toolkit'
import planeSlice from './slices/planeSlice';

export const store = configureStore({
    reducer: {
        planes: planeSlice
    }
});

