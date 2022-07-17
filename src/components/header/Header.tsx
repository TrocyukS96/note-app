import React from 'react';
import s from './index.module.scss';
import {SearchIcon} from "../../assets/icons/SearchIcon";
import {NavLink} from "react-router-dom";

export const Header =() => {
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
                    <input type="text"/>
                    <SearchIcon className={s.searchIcon}/>
                </div>
            </div>
        </div>
    </header>
  );
}

