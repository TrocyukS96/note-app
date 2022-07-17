import {ChangeEvent, FC, useEffect, useState} from "react";
import s from './index.module.scss';
import {useParams} from "react-router-dom";
import {db} from "../../db/db";
import {useLiveQuery} from "dexie-react-hooks";

interface IProps {
    isEdit?: boolean
    setEdit:(value:boolean)=>void
}

export const Note: FC<IProps> = ({isEdit,setEdit}) => {
    const {id} = useParams()

    const note = useLiveQuery(
        async () => await db.notes.where('id').equals(Number(id)).toArray(), [id]
    )

    const [inputTitle, setInputTitle] = useState('')
    const [inputText, setInputText] = useState('')

    useEffect(()=>{
        setInputTitle(note ? note[0].title : '')
        setInputText(note ? note[0].text : '')
    },[note])


    const addTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.currentTarget.value)
    }

    const addTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.currentTarget.value)
    }

    console.log('inputTitle  ->' + inputTitle)

    async function updateNote() {
        try {
            await db.notes.update(Number(id),{
                title: inputTitle,
                text: inputText,
                date: note ? note[0].date : ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateNoteHandler = () => {
        updateNote()
        setInputTitle('')
        setInputText('')
        setEdit(false)
    }

    if (isEdit) {
        return (
            <div className={s.noteEditBlock}>
                <span>{note ? note[0].date : ''}</span>
                <div className={s.content}>
                    <div className={s.inputWrap}>
                        <h3>Title</h3>
                        <input type="text" placeholder={'write a title'} onChange={addTitleHandler} value={inputTitle}/>
                    </div>
                    <div className={s.inputWrap}>
                        <h3>Text</h3>
                        <textarea placeholder={'write a note'} onChange={addTextHandler} value={inputText}/>
                    </div>
                    <button onClick={updateNoteHandler}>save changes</button>
                </div>
            </div>
        )
    }

    return (
        <div className={s.noteBlock}>
            <span className={s.time}>{note ? note[0].date : ''}</span>
            <div className={s.content}>
                <h1>{note ? note[0].title : ''}</h1>
                <div>{note ? note[0].text : ''}</div>
            </div>
        </div>
    )
}