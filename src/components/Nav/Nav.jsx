import React from "react";
import s from './Nav.module.css';
function Nav (){
    return(
        <nav className={s.nav}>

            <div className={s.item}>
                <a> my profile </a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a> message </a>
            </div>
            <div className={s.item}>
                <a>new</a>
            </div>
            <div className={s.item}>
                <a>setings</a>
            </div>
        </nav>
    );

}
export default Nav;