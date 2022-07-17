import {ChangeEvent, FC, useState} from "react";
import s from './index.module.scss';
import {db} from "../../db/db";


export const NewNote: FC = ({}) => {
    const [inputTitle, setInputTitle] = useState('')
    const [inputText, setInputText] = useState('')
    const addTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.currentTarget.value)
    }

    const addTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.currentTarget.value)
    }

    const currentDate = new Date().toLocaleString('ru',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    async function addNote() {
        try {
              await db.notes.add({
                title: inputTitle,
                text: inputText,
                date: currentDate
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addNoteHandler = () => {
        setInputTitle('')
        setInputText('')
        addNote()
    }

        return (
            <div className={s.noteBlock}>
                <span>{currentDate}</span>
                <div className={s.content}>
                    <div className={s.inputWrap}>
                        <h3>Title</h3>
                        <input type="text" placeholder={'write a title'} onChange={addTitleHandler} value={inputTitle}/>
                    </div>
                    <div className={s.inputWrap}>
                        <h3>Text</h3>
                        <textarea placeholder={'write a note'} onChange={addTextHandler} value={inputText}/>
                    </div>
                    <button onClick={addNoteHandler}>save changes</button>
                </div>
            </div>
        )

}