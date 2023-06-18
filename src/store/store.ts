import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import formReducer from './reducers/FormSlice'
import { userAPI } from "../services/UserService";


export const store = configureStore({
    reducer: {
        formReducer,
        [userAPI.reducerPath]: userAPI.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(userAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch