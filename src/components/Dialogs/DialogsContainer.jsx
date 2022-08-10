import React from "react";

import {messageActionCreator, updateMessageTextActionCreate} from "../../Redux/Reducer/Dialogs-reducer";

import {connect} from "react-redux";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageTextAction: () => {
            dispatch(messageActionCreator());
        },
        sendMessage: (body) => {
            dispatch(updateMessageTextActionCreate(body));
        }
    }
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;

