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
            ]
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

        if (action.type === 'ADD-POST'){
            let newPost = {
                id:8,
                name:this._state.profilePage.newPostText,
                likesCount: 2
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._collSubscribe(this._state);

        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._collSubscribe(this._state);

        }

    }
}

export default store;