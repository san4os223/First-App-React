import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreate} from "../../../Redux/Reducer/Profile-reducer";
import MyPosts from "./MyPosts";


function MyContainer (props) {
let state = props.store.getState();

    let addPost = () => {

        props.store.dispatch(addPostActionCreator());

    }
let onPostChange  = (text) =>{

    let action = updateNewPostTextActionCreate(text);
    props.store.dispatch(action);
};


    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            postData={state.profilePage.postData}
            newPostsText ={state.profilePage.newPostText}
        />
    );
}
export default MyContainer;