const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-BODY_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';


const dialogsReducer = (state,action)=>{

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 7, name: body});
            return state;
        default:
            return state;

    }



}
export const  messageActionCreator = () =>{
    return {type: SEND_MESSAGE}}

export const  updateMessageTextActionCreate = (body) =>{
    return {type: UPDATE_NEW_MESSAGE_BODY,body: body }
}
export default dialogsReducer;