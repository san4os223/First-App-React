import React from "react";
import dialogStyll from './DIalogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Messages";
import {messageActionCreator, updateMessageTextActionCreate} from "../../Redux/Reducer/Dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElement = state.dialogData.map(dialog => {return (<DialogItem name={dialog.name} key={dialog.id}id={dialog.id}/>)});
        let messageElement = state.messageData.map(message => {return (<Messages message={message.name}key={message.id}/>)})
    let newMessageBody = state.newMessageBody;

    let sendMessageClick = () => {
        props.sendMessage();
    }

    let NewMessageChange = (e) => {
        let body = e.target.value;
        props.updateMessageTextAction(body);
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