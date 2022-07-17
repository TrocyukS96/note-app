import {FC} from "react";
import s from './index.module.scss';
import {Route, Routes} from "react-router-dom";
import {Note} from "../note/Note";
import {NewNote} from "../newNote/NewNote";
interface IProps {
    isEdit:boolean
    setEdit:(value:boolean)=>void
}

export const WorkSpace:FC<IProps>=({isEdit,setEdit})=>{
    return(
        <div className={s.wrapper}>
            <Routes>
                <Route path={"/notes/:id"} element={<Note isEdit={isEdit} setEdit={setEdit}/>} />
                <Route path={"/new"} element={<NewNote/>} />
            </Routes>
        </div>
    )
}