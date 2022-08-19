import { configureStore } from "@reduxjs/toolkit";
import popupSlice from './slices/popup'

let store = configureStore({
    reducer: {
        popup: popupSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store