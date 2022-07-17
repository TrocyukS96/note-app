import React, {FC} from 'react';
import s from './index.module.scss';
import {Item} from "./item/Item";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../../db/db";

interface IProps {
    setEdit:(value:boolean)=>void
    isEdit:boolean
}

export const SideBar: FC<IProps> = ({setEdit,isEdit}) => {

    const dbNotes = useLiveQuery(
        async () => await db.notes.toArray()
    )

    return (
        <div className={s.wrapper}>
            {
                dbNotes?.map((note, index) => {
                    return (
                        <Item title={note.title}
                              date={note.date}
                              id={note.id} key={index}
                              setEdit={setEdit}
                              isEdit={isEdit}
                        >{note.text.length > 0 ? note.text : 'no additional text'}</Item>
                    )
                })
            }
        </div>
    );
}

