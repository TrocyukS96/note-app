import Dexie, {Table} from "dexie";
import {NoteType} from "../app/types";



export class MySubClassedDexie extends Dexie {
    notes!: Table<NoteType>;

    constructor() {
        super('noteApp');
        this.version(1).stores({
            notes: '++id, title, text,date'
        });
    }
}

export const db = new MySubClassedDexie();