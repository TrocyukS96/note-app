import {ChangeEvent, FC, useState} from "react";
import s from './index.module.scss';
import {useActions} from "../../utils/redux-utils";
import {noteActions} from "../../redux";


export const NewNote: FC = () => {
    const [title, setInputTitle] = useState('')
    const [text, setInputText] = useState('')
    const {addNote} = useActions(noteActions)

    const addTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.currentTarget.value)
    }

    const addTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.currentTarget.value)
    }

    const currentDate = new Date().toLocaleString('ru', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const addNoteHandler = () => {
        addNote({
            title,
            text,
            date: currentDate
        })

        setInputTitle('')
        setInputText('')
    }

    return (
        <div className={s.noteBlock}>
            <span>{currentDate}</span>
            <div className={s.content}>
                <div className={s.inputWrap}>
                    <h3>Title</h3>
                    <input type="text" placeholder={'write a title'} onChange={addTitleHandler} value={title}/>
                </div>
                <div className={s.inputWrap}>
                    <h3>Text</h3>
                    <textarea placeholder={'write a note'} onChange={addTextHandler} value={text}/>
                </div>
                <button onClick={addNoteHandler}>save changes</button>
            </div>
        </div>
    )

}