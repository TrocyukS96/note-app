import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NoteType} from "../app/types";


export const slice = createSlice({
    name: 'note',
    initialState: {
        notes: [] as Array<NoteType>
    },
    reducers: {
        setNotes(state, action: PayloadAction<NoteType[]>) {
            state.notes = action.payload
        },
        addNote(state, action: PayloadAction<NoteType>) {
            state.notes.push(action.payload)
        },
    },
})

const {setNotes, addNote} = slice.actions

