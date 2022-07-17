import {combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'
import {notesReducer} from "./index";

export const rootReducer = combineReducers({
    notes: notesReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

// @ts-ignore
window.store = store

