import {FC, useEffect, useState} from "react";
import s from './intex.module.scss';
import {NavLink, useLocation, useMatch} from "react-router-dom";
import {db} from "../../../db/db";

interface IProps {
    title: string
    date: string
    className?: string
    children: any
    id?: number
    setEdit:(value:boolean)=>void
    isEdit:boolean

}

export const Item: FC<IProps> = (
    {title, date,
        className, children,
        id,setEdit,isEdit}) => {
    let location = useLocation();
    console.log(location.pathname)

    const deleteNote = async () => {
        try {
            if (id) {
                await db.notes.delete(id)
            }
        } catch (error) {
        }
    }

    const deleteNoteHandler = () => {
        deleteNote()
    }


    const editHandler =()=>{
        setEdit(!isEdit)
    }
    return (
        <NavLink to={`notes/${id}`}
                 className={s.link}
                 style={location.pathname === `/notes/${id}` ? {backgroundColor: '#E96344'} : {}}
        >
            {title}
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
}