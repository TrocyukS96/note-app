import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NoteType} from "../app/types";
import {db} from "../db/db";

export const fetchNotes = createAsyncThunk('note/fetch', async (param, thunkAPI) => {
    try {
        const res = await db.notes.toArray()
        thunkAPI.dispatch(setNotes(res))
    } catch (error) {
        console.log(error)
    }
})
export const fetchCurrentNote = createAsyncThunk('note/fetchCurrentNote', async (id: number, thunkAPI) => {
    try {
        const res = await db.notes.where('id').equals(id).toArray()
        thunkAPI.dispatch(setCurrentNote(res))
    } catch (error) {
        console.log(error)
    }
})
export const addNote = createAsyncThunk('note/add', async (param: NoteType, thunkAPI) => {
    try {
        await db.notes.add({...param})
        thunkAPI.dispatch(fetchNotes())
    } catch (error) {
        console.log(error)
    }
})
export const updateNote = createAsyncThunk('note/update', async (param: { noteData: NoteType, id: number }, thunkAPI) => {
    try {
        await db.notes.update(param.id, {...param.noteData})
        thunkAPI.dispatch(fetchNotes())
    } catch (error) {
        console.log(error)
    }
})
export const removeNote = createAsyncThunk('note/remove', async (id: number, thunkAPI) => {
    try {
        await db.notes.delete(id)
        thunkAPI.dispatch(fetchNotes())
    } catch (error) {
        console.log(error)
    }
})

export const slice = createSlice({
    name: 'note',
    initialState: {
        notes: [] as NoteType[],
        isEdit: false,
        currentNote: {} as NoteType,
        currentId:null as number | null
    },
    reducers: {
        setNotes(state, action: PayloadAction<NoteType[]>) {
            state.notes = action.payload
        },
        setCurrentNote(state, action: PayloadAction<NoteType[]>) {
            state.currentNote = {...action.payload[0]}
        },
        setIsEdit(state, action: PayloadAction<{ value: boolean }>) {
            state.isEdit = action.payload.value
        }
    },
})

export const asyncActions = {fetchNotes, addNote, removeNote, updateNote, fetchCurrentNote}
const {setNotes, setCurrentNote} = slice.actions

