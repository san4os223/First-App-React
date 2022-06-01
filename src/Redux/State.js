let rerenderTree = () => {
    console.log('statechange');
}



let state = {

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

}
 export const addPost = () => {
    let newPost = {
        id:8,
        name:state.profilePage.newPostText,
        likesCount: 2
    };
    state.profilePage.postData.push(newPost);
   state.profilePage.newPostText = '';
     rerenderTree(state);

}

export const uppdateNewPostText= (newText) => {

    state.profilePage.newPostText = newText;
    rerenderTree(state);

}
export const subscribe = (observer) => {
    rerenderTree = observer; //patern
}
export default state;