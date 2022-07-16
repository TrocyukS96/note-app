import {FC} from "react";
import s from './index.module.scss';
interface IProps {

}

export const NotePage:FC<IProps>=()=>{
    return(
        <div className={s.wrapper}>
            <span className={s.time}>01.01.2022</span>
            <div className={s.content}>
                <h1>Title</h1>
            </div>
        </div>
    )
}