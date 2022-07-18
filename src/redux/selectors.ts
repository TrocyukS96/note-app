import {AppRootStateType} from "../app/types";


export const notes = (state:AppRootStateType)=>state.notes.notes
export const isEdit = (state:AppRootStateType)=>state.notes.isEdit
export const currentNote = (state:AppRootStateType)=>state.notes.currentNote