import React from "react";
import dialogStyll from './DIalogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Messages";
import {messageActionCreator, updateMessageTextActionCreate} from "../../Redux/Reducer/Dialogs-reducer";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage;

    let sendMessageClick = () => {
        props.store.dispatch(messageActionCreator());
    }

    let NewMessageChange = (body) => {
       props.store.dispatch(updateMessageTextActionCreate(body));
    }

    return (<dialogs
            updateMessageTextAction={NewMessageChange}
            sendMessage={sendMessageClick}
            dialogPage={state}
        />);

}

export default DialogsContainer;