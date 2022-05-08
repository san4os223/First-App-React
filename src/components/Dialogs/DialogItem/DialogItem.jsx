import React from "react";
import dialogStyll from './../DIalogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    return ( <div className={dialogStyll.dialog }>

            <div className={ dialogStyll.item}>
        <img className={dialogStyll.item} src={'data:image/jpeg;base64,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'}   />

            <NavLink className={dialogStyll.userContent}  to={'/DialogItem/'+ props.id} >{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;
