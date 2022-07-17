import React, {FC, useEffect} from 'react';
import s from './index.module.scss';
import {Item} from "./item/Item";
import {noteActions, noteSelectors} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../../db/db";

const {setNotes} = noteActions

const {notes} = noteSelectors
export const SideBar: FC = () => {
    const dispatch = useDispatch()

    const allNotes = useSelector(notes)

    const dbNotes = useLiveQuery(
         async() => await db.notes.toArray()
    )

    useEffect(() => {
        if (dbNotes) {
            dispatch(setNotes(dbNotes))
            console.log(dbNotes)

        }
    })
    console.log('allNotes  '+allNotes)
    return (
        <div className={s.wrapper}>
            {
                allNotes.map((note, index) => {
                    return (
                        <Item title={note.title} time={note.date} id={note.id} key={index}>{note.text}</Item>
                    )
                })
            }
        </div>
    );
}

