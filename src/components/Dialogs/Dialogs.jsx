import React from "react";
import dialogStyll from './DIalogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={dialogStyll.dialogsContent}>
            <div className={dialogStyll.dialogs}>
                <div className={dialogStyll.dialogsUser}>

                    <div className={dialogStyll.dialog + ' ' + dialogStyll.active}>
                        <NavLink  to={'/Dialogs/1'} >1A</NavLink>
                    </div>
                    <div className={dialogStyll.dialog}>
                        <NavLink  to={'/Dialogs/2'} > 2B</NavLink>
                    </div>
                    <div className={dialogStyll.dialog}>
                        <NavLink  to={'/Dialogs/3'} > 3B</NavLink>
                    </div>
                    <div className={dialogStyll.dialog}>
                        <NavLink  to={'/Dialogs/4'} >  4B</NavLink>
                    </div>
                    <div className={dialogStyll.dialog}>
                        <NavLink  to={'/Dialogs/5'} > 5B </NavLink>
                    </div>

                </div>
                <div className={dialogStyll.messages}>
                    <div className={dialogStyll.message}> how are u</div>
                    <div className={dialogStyll.message}> 1111111</div>
                    <div className={dialogStyll.message}>22222</div>
                </div>
            </div>
        </div>
    );

}

export default Dialogs;