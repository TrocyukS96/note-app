import react, {FC} from "react";
import s from './intex.module.scss';
import {NavLink, useLocation} from "react-router-dom";
import {useActions} from "../../../utils/redux-utils";
import {noteActions, noteSelectors} from "../../../redux";
import {useSelector} from "react-redux";

interface IProps {
    title: string
    date: string
    className?: string
    children: any
    id?: number

}

export const Item: FC<IProps> = react.memo((
    {
        title,
        date,
        className,
        children,
        id,
    }) => {
    let location = useLocation();
    const {removeNote, setIsEdit} = useActions(noteActions)
    const isEdit = useSelector(noteSelectors.isEdit)

    const deleteNoteHandler = () => {
        const acceptAction = window.confirm('Are you sure?')
        if (acceptAction) {
            removeNote(Number(id))
        }
    }

    const editHandler = () => {
        setIsEdit({value: !isEdit})
    }
    return (
        <NavLink to={`notes/${id}`}
                 className={s.link}
                 style={location.pathname === `/notes/${id}` ? {backgroundColor: 'rgb(255 231 226)'} : {}}
        >

            <h4>{title}</h4>
            <div className={className ?
                `${s.wrapper} ${className}` : s.wrapper}
            >
                <div className={s.content}
                >
                    <p className={s.date}>{date}</p>
                    <p className={s.text}>{children}</p>
                </div>
                {location.pathname === `/notes/${id}` &&
                    <div className={s.btnBlock}>
                        <button onClick={editHandler}>Edit</button>
                        <button onClick={deleteNoteHandler}>Delete</button>
                    </div>
                }
            </div>
        </NavLink>
    )
})