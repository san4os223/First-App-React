import React from "react";
import dialogStyll from './DIalogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Messages";
import Messages from "./Message/Messages";
import {messageActionCreator, updateMessageTextActionCreate} from "../../Redux/State";


const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;

    let dialogsElement = state.dialogData.map((dialog) => {return (<DialogItem name={dialog.name} id={dialog.id}/>)});

    let messageElement = state.messageData.map((message) => {return (<Messages message={message.name}/>)})

    let newMessageBody = state.newMessageBody;

    let sendMessageClick = () => {
        props.store.dispatch(messageActionCreator());
    }

    let NewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateMessageTextActionCreate(body));
    }

    return (
        <div className={dialogStyll.dialogsContent}>
            <div className={dialogStyll.headerMessage}> My message</div>
            <div className={dialogStyll.dialogs}>
                <div className={dialogStyll.dialogsUser}>

                    {dialogsElement}

                </div>
                <div className={dialogStyll.messages}>
                    <div>{messageElement}</div>
                    <div>
                        <textarea value={newMessageBody}
                                   onChange={NewMessageChange}
                                   placeholder='enter yor message'>
                        </textarea>
                    </div>

                    <div><button onClick ={sendMessageClick}>send</button></div>
                </div>

            </div>
        </div>
    );

}

export default Dialogs;