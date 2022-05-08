import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
function Nav (){
    return(
        <nav className={s.nav}>

            <div >

                <NavLink to={"/Profile" }className = { navData => navData.isActive ? s.active : s.item } > my profile </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to = {"/Dialogs"} className = { navData => navData.isActive ? s.active : s.item }> message </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = {"/News"} className = { navData => navData.isActive ? s.active : s.item }> News </NavLink>
            </div>
            <div className={s.item}>
                <a>setings</a>
            </div>
            <div className={s.item}>
                <NavLink to = {"/Friends"} className = { navData => navData.isActive ? s.active : s.item }> Friends </NavLink>
            </div>
        </nav>
    );

}
export default Nav;