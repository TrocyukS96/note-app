import React, {FC, useState} from 'react';
import s from './index.module.scss';
import {Item} from "./item/Item";

export const SideBar:FC=()=>{
  return (
    <div className={s.wrapper}>
        <Item time={'01/02/03'}
              title={'Новая заметка'}
        >no additional text...</Item>
        <Item time={'01/02/03'}
              title={'Шмот'}
        >Фронтенд...</Item>
        <Item time={'01/02/03'}
              title={'Шмот'}
        >Фронтенд...</Item>
        <Item time={'01/02/03'}
              title={'Планы на день'}
        >Фронтенд...</Item>
        <Item time={'01/02/03'}
              title={'Шмот'}
        >Фронтенд...</Item>
    </div>
  );
}

