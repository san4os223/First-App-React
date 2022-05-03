import React from "react";
import dialogStyll from './DIalogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
   return ( <div className={dialogStyll.dialog + ' ' + dialogStyll.active}>
        <NavLink  to={'/Dialogs/'+ props.id} >{props.name}</NavLink>
    </div>
   );
}

const Message = (props) =>{
    return (
        <div className={dialogStyll.message}> {props.message}</div>

    );

}

const Dialogs = (props) => {
    return (
        <div className={dialogStyll.dialogsContent}>
            <div className={dialogStyll.dialogs}>
                <div className={dialogStyll.dialogsUser}>

                    <DialogItem name = "1A" id = "1"/>
                    <DialogItem name = "2b" id = "2"/>
                    <DialogItem name = "3c" id = "3"/>
                    <DialogItem name = "4v" id = "4"/>
                    <DialogItem name = "5d" id = "5"/>
                    <DialogItem name = "6e" id = "6"/>

                </div>
                <div className={dialogStyll.messages}>
                  <Message message = "hello"/>
                  <Message message = "first message"/>
                  <Message message = "second message"/>
                </div>
            </div>
        </div>
    );

}

export default Dialogs;