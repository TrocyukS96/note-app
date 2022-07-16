import {FC, useState} from "react";
import s from './intex.module.scss';

interface IProps{
    title:string
    time:string
    className?:string
    children:any

}

export const Item:FC<IProps>=({title,time,className,children})=>{
    let [editPanel,setEditPanel]=useState(false)

    const editPanelHandler=()=> {
        setEditPanel(!editPanel)
    }

    return(
        <div className={className ?
            `${s.wrapper} ${className}` : s.wrapper}
             onClick={editPanelHandler}
        >
            <h4>{title}</h4>
            <div className={s.content}>
                <span>{time}</span>
                <p>{children}</p>
            </div>
            {editPanel &&
                <div className={s.btnBlock}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            }
        </div>
    )
}