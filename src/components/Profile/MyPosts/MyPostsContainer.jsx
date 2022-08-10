import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreate} from "../../../Redux/Reducer/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
    let mapDispatchToProps = (dispatch) => {
        return {

            updateNewPostText: (text) => {
                let action = updateNewPostTextActionCreate(text);
                dispatch(action);
            },
            addPost: () => {
                dispatch(addPostActionCreator());
            }
        }
    }
let MyContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyContainer;
