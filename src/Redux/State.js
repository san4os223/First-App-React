const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-BODY_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
let store = {
    _state: {

        profilePage:{
            postData:[
                {id: 1,name:'hi hello',likes:12},
                {id: 2,name:'its my first post',likes:10},
            ],
            newPostText: "fdsfdsfsdfds",
        },

        dialogPage:{
            dialogData:[
                {id : 1 , name: '1Aааааааа' },
                {id : 2 , name: '2Aааааааа' },
                {id : 3 , name: '3Aааааааа' },
                {id : 4 , name: '4Aааааааа' },
                {id : 5 , name: '5Aаааааааа' },
                {id : 6 , name: '6Aаааааааа' }
            ],
            messageData:[
                {id: 1,name:'hello'},
                {id: 2,name:'h'},
                {id: 3,name:'ha'},
                {id: 4,name:'hihi'},
                {id: 5,name:'hyy'},
                {id: 6,name:'YOOOOOO'}
            ],
            newMessageBody : ""
        }

    },
    getState() {
        return this._state;
    },
    _collSubscribe ()  {
        console.log('statechange');
    },

    subscribe (observer)  {
      this._collSubscribe = observer; //patern
    },

    dispatch(action){

        if (action.type === ADD_POST){
            let newPost = {
                id:8,
                name:this._state.profilePage.newPostText,
                likesCount: 2
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._collSubscribe(this._state);

        }else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._collSubscribe(this._state);

        }


        else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogPage.newMessageBody = action.body;
            this._collSubscribe(this._state);
        } else if (action.type === SEND_MESSAGE){
           let body = this._state.dialogPage.newMessageBody;
           this._state.dialogPage.newMessageBody = '';
           this._state.dialogPage.messageData.push( {id: 7,name: body}) ;
            this._collSubscribe(this._state);
        }

    }
}

export const  addPostActionCreator = () =>{

    return {type: ADD_POST}
}
export const  updateNewPostTextActionCreate = (text) =>{

    return {type: UPDATE_NEW_POST_TEXT,newText: text}

}
export const  messageActionCreator = () =>{
    return {type: SEND_MESSAGE}}

export const  updateMessageTextActionCreate = (body) =>{
    return {type: UPDATE_NEW_MESSAGE_BODY,body: body }
}


export default store;