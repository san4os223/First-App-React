const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-BODY_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState =
    {
        dialogData: [
            {id: 1, name: '1Aааааааа'},
            {id: 2, name: '2Aааааааа'},
            {id: 3, name: '3Aааааааа'},
            {id: 4, name: '4Aааааааа'},
            {id: 5, name: '5Aаааааааа'},
            {id: 6, name: '6Aаааааааа'}
        ],
        messageData: [
            {id: 1, name: 'hello'},
            {id: 2, name: 'h'},
            {id: 3, name: 'ha'},
            {id: 4, name: 'hihi'},
            {id: 5, name: 'hyy'},
            {id: 6, name: 'YOOOOOO'}
        ],
        newMessageBody: "rrrr"

    };

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body,
            };

        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return{
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, {id: 7, name: body}],
            };
        }
        default:
            return state;
    }


}
export const messageActionCreator = () => {
    return {type: SEND_MESSAGE}
}

export const updateMessageTextActionCreate = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}
export default dialogsReducer;