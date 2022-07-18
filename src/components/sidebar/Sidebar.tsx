import React, {FC} from 'react';
import s from './index.module.scss';
import {Item} from "./item/Item";
import {NoteType} from "../../app/types";
import react from 'react';

interface IProps {
    filteredNotes: NoteType[]
}

export const SideBar: FC<IProps> = react.memo(({filteredNotes}) => {
    return (
        <div className={s.wrapper}>
            {
                filteredNotes.map((note, index) => {
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
})

