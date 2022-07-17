import {FC, useState} from "react";
import s from './intex.module.scss';
import {NavLink, useNavigate} from "react-router-dom";
import {db} from "../../../db/db";

interface IProps {
    title: string
    time: string
    className?: string
    children: any
    id?: number

}

export const Item: FC<IProps> = ({title, time, className, children, id}) => {
    let [editPanel, setEditPanel] = useState(false)

    const editPanelHandler = () => {
        setEditPanel(!editPanel)
    }

    const deleteNote = async () => {
        try {
            if(id){
                await db.notes.delete(id)
            }
        } catch (error) {
        }
    }

    const deleteNoteHandler = () => {
        deleteNote()
    }
    return (
        <div className={className ?
            `${s.wrapper} ${className}` : s.wrapper}
             onClick={() => setEditPanel(true)}
        >
            <NavLink to={`notes/${id}`}>
                {title}
            </NavLink>
            <div className={s.content}>
                <span>{time}</span>
                <p>{children}</p>
            </div>
            {editPanel &&
                <div className={s.btnBlock}>
                    <button>Edit</button>
                    <button onClick={deleteNoteHandler}>Delete</button>
                </div>
            }
        </div>
    )
}