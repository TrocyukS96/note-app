import {ChangeEvent, FC, useState} from "react";
import s from './index.module.scss';
import {useParams} from "react-router-dom";
import {db} from "../../db/db";
import {useLiveQuery} from "dexie-react-hooks";
import {useSelector} from "react-redux";
import {noteSelectors} from "../../redux";

interface IProps {
    time?: string
    title?: string
    isNew?: boolean
}


export const Note: FC<IProps> = ({time, title, isNew}) => {
    const {id} = useParams()
    const allNotes = useSelector(noteSelectors.notes)
    const [inputTitle, setInputTitle] = useState('')
    const [inputText, setInputText] = useState('')
    const addTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.currentTarget.value)
    }

    const addTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.currentTarget.value)
    }

    const currentDate = new Date().toLocaleString()

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

        const note = useLiveQuery(
                async ()=>await db.notes.where('id').equals(Number(id)).toArray(),[id]
        )

    if (isNew) {
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

    return (
        <div>
            <span className={s.time}>{note ? note[0].date : ''}</span>
            <div className={s.content}>
                <h1>{note ? note[0].title : ''}</h1>
            </div>
        </div>
    )
}