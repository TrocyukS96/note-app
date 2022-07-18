import {FC} from "react";
import s from './index.module.scss';
import {Route, Routes} from "react-router-dom";
import {Note} from "../note/Note";
import {NewNote} from "../newNote/NewNote";

export const WorkSpace:FC=()=>{
    return(
        <div className={s.wrapper}>
            <Routes>
                <Route path={"/notes/:id"} element={<Note />} />
                <Route path={"/new"} element={<NewNote/>} />
            </Routes>
        </div>
    )
}