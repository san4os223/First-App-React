import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
function Nav (){
    return(
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to={"/Profile"}> my profile </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to = {"/Dialogs"}> message </NavLink>
            </div>
            <div className={s.itemNews}>
                <NavLink to = {"/News"}> News </NavLink>
            </div>
            <div className={s.item}>
                <a>setings</a>
            </div>
        </nav>
    );

}
export default Nav;