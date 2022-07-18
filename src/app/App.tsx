import React, {useCallback, useEffect, useState} from 'react';
import s from './App.module.scss';
import {Header} from "../components/header/Header";
import {SideBar} from "../components/sidebar/Sidebar";
import {WorkSpace} from "../components/workSpace/WorkSpace";
import {useActions} from "../utils/redux-utils";
import {noteActions, noteSelectors} from "../redux";
import {useSelector} from "react-redux";
import {NoteType} from "./types";

export const App = () => {
    const {fetchNotes} = useActions(noteActions)
    const dbNotes = useSelector(noteSelectors.notes)
    const [notes, setNotes] = useState<NoteType[]>([] as NoteType[])
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetchNotes()
        setNotes(dbNotes)
    }, [dbNotes])

    const filteredNotes =useCallback (() => {
        if (filter.length > 0) {
            return notes.filter((note) => note['title'].toLowerCase().includes(filter.toLowerCase()))
        } else {
            return notes
        }
    },[notes])

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.inner}>
                    <Header setFilter={setFilter}/>
                    <main className={s.main}>
                        <SideBar filteredNotes={filteredNotes()}/>
                        <WorkSpace/>
                    </main>
                </div>
            </div>
        </div>
    );
}


