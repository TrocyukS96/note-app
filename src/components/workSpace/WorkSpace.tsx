import {FC} from "react";
import s from './index.module.scss';
import {Route, Routes} from "react-router-dom";
import {Note} from "../note/Note";
import {NewNote} from "../newNote/NewNote";
interface IProps {

}

export const WorkSpace:FC<IProps>=()=>{
    return(
        <div className={s.wrapper}>
            <Routes>
                <Route path={"/notes/:id"} element={<Note title={'1'} time={'01/01/01'}/>} />
                <Route path={"/new"} element={<NewNote/>} />
            </Routes>
        </div>
    )
}