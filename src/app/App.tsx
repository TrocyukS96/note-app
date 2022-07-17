import React from 'react';
import s from './App.module.scss';
import {Header} from "../components/header/Header";
import {SideBar} from "../components/sidebar/Sidebar";
import {WorkSpace} from "../components/workSpace/WorkSpace";

function App() {
  return (
    <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
             <Header/>
              <main className={s.main}>
                  <SideBar/>
                  <WorkSpace/>
              </main>
          </div>
        </div>
    </div>
  );
}

export default App;
