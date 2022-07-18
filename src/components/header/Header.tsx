import React, {ChangeEvent, FC} from 'react';
import s from './index.module.scss';
import {SearchIcon} from "../../assets/icons/SearchIcon";
import {NavLink} from "react-router-dom";

interface IProps {
    setFilter:(value:string)=>void
}

export const Header:FC<IProps> =({setFilter}) => {

    const setFilterValueHandler= (e:ChangeEvent<HTMLInputElement>)=>{
        setFilter(e.currentTarget.value)
    }
  return (
    <header className={s.inner}>
        <div className={s.logo}></div>
        <div className={s.editPanel}>
            <NavLink className={s.addLink} to={'new'}>
                Add new note
            </NavLink>
        </div>
        <div className={s.searchBlock}>
            <div className={s.wrapper}>
                <div className={s.inputWrap}>
                    <input
                        type="text"
                        placeholder={'write a text'}
                        onChange={setFilterValueHandler}
                    />
                    <SearchIcon className={s.searchIcon}/>
                </div>
            </div>
        </div>
    </header>
  );
}

