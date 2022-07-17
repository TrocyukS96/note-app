import {rootReducer, store} from "../redux/store";

export type NoteType={
    title:string,
    text:string,
    date:string,
    id?:number
}


export type RootReducerType = typeof rootReducer
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch
