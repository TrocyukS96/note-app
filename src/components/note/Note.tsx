import {ChangeEvent, useEffect, useState} from "react";
import s from './index.module.scss';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {noteActions, noteSelectors} from "../../redux";
import {useActions} from "../../utils/redux-utils";

export const Note = () => {
    const {id} = useParams()
    const {fetchCurrentNote,setIsEdit, updateNote} = useActions(noteActions)
    const currentNote = useSelector(noteSelectors.currentNote)
    const notes = useSelector(noteSelectors.notes)
    const isEdit = useSelector(noteSelectors.isEdit)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    useEffect(()=>{
        fetchCurrentNote(Number(id))
        setTitle(currentNote.title)
        setText(currentNote.text)
    },[id,currentNote])

    const addTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        updateNote({
            noteData: {
                title:e.currentTarget.value, text, date: currentNote.date
            }, id: Number(id)
        })
    }

    const addTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
        updateNote({
            noteData: {
                title, text:e.currentTarget.value, date: currentNote.date
            }, id: Number(id)
        })
    }

    const closeEditPanelHandler = () => {
        setIsEdit({value: false})
    }

    if (isEdit ) {
        return (
            <div className={s.noteEditBlock}>
                <span>{currentNote.date}</span>
                <div className={s.content}>
                    <div className={s.inputWrap}>
                        <h3>Title</h3>
                        <input type="text" placeholder={'write a title'} onChange={addTitleHandler} value={title}/>
                    </div>
                    <div className={s.inputWrap}>
                        <h3>Text</h3>
                        <textarea placeholder={'write a note'} onChange={addTextHandler} value={text}/>
                    </div>
                    <button onClick={closeEditPanelHandler}>close edit panel</button>
                </div>
            </div>
        )
    }

    if(notes.length<=0){
        return(
            <div className={s.noDataNotice}>
                no data yet...
            </div>
        )
    }

    return (
        <div className={s.noteBlock}>
            <span className={s.time}>{currentNote.date}</span>
            <div className={s.content}>
                <h1>{currentNote.title}</h1>
                <div>{currentNote.text}</div>
            </div>
        </div>
    )
}