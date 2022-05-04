import React from "react";
import dialogStyll from './DIalogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Messages";
import Messages from "./Message/Messages";


const Dialogs = (props) => {

    let dialogData = [
        {id : 1 , name: '1A' },
        {id : 2 , name: '2A' },
        {id : 3 , name: '3A' },
        {id : 4 , name: '4A' },
        {id : 5 , name: '5A' },
        {id : 6 , name: '6A' }
    ]
    let messageData = [
        {id: 1,name:'hello'},
        {id: 2,name:'h'},
        {id: 3,name:'ha'},
        {id: 4,name:'hihi'},
        {id: 5,name:'hyy'},
        {id: 6,name:'YOOOOOO'}
    ]



    let dialogsElement = dialogData
        .map( (dialog)=>{return (<DialogItem name = {dialog.name} id = {dialog.id}/>
        )} );

    let messageElement = messageData
        .map( (message)=>{return( <Messages message = {message.name}/>
        )} )


    return (
        <div className={dialogStyll.dialogsContent}>
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