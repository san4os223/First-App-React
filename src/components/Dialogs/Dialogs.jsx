import React from "react";
import dialogStyll from './DIalogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Messages";
import Messages from "./Message/Messages";


const Dialogs = (props) => {

    let dialogsElement = props.dialogData
        .map( (dialog)=>{return (<DialogItem name = {dialog.name} id = {dialog.id}/>
        )} );

    let messageElement = props.messageData
        .map( (message)=>{return( <Messages message = {message.name}/>
        )} )


    return (
        <div className={dialogStyll.dialogsContent}>
            <div className={dialogStyll.headerMessage}>  My message </div>
            <div className={dialogStyll.dialogs}>
                <div className={dialogStyll.dialogsUser}>

                    {dialogsElement}

                </div>
                <div className={dialogStyll.messages}>
                    {messageElement}
                </div>
            </div>
        </div>
    );

}

export default Dialogs;