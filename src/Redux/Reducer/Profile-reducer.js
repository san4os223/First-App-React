const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData:[
        {id: 1,name:'hi hello',likes:12},
        {id: 2,name:'its my first post',likes:10},
    ],
    newPostText: "fdsfdsfsdfds",
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 8,
                name: state.newPostText,
                likesCount: 2
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }


    return state;
}
export const  addPostActionCreator = () =>{

    return {type: ADD_POST}
}
export const  updateNewPostTextActionCreate = (text) =>{

    return {type: UPDATE_NEW_POST_TEXT,newText: text}

}
export default profileReducer;