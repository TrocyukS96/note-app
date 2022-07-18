import React, {FC, useEffect, useState} from 'react';
import s from './index.module.scss';
import {Item} from "./item/Item";
import {NoteType} from "../../app/types";
import {noteActions, noteSelectors} from "../../redux";
import {useActions} from "../../utils/redux-utils";
import {useSelector} from "react-redux";

interface IProps {
    filteredNotes:NoteType[]
}

export const SideBar: FC<IProps> = ({filteredNotes}) => {
    // const {fetchNotes} = useActions(noteActions)
    // const dbNotes=useSelector(noteSelectors.notes)
    //
    // useEffect(()=>{
    //     fetchNotes()
    // },[])

    const [notes,setNotes]=useState<NoteType[]>([] as NoteType[])

    useEffect(()=>{
        setNotes(filteredNotes)
    },[filteredNotes])
    console.log(filteredNotes)
    return (
        <div className={s.wrapper}>
            {
                notes.map((note, index) => {
                    return (
                        <Item title={note.title}
                              date={note.date}
                              id={note.id}
                              key={index}
                        >{note.text.length > 0 ? note.text : 'no additional text'}</Item>
                    )
                })
            }
        </div>
    );
}

