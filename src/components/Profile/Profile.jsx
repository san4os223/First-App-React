import React from "react";
import r from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Posts/Post";
import {uppdateNewPostText} from "../../Redux/store";







function Profile(props) {
  

    return (<div>

            <MyPosts postData ={props.postData}
                     dispatch ={props.dispatch}
                    newPostText ={props.newPostText}

            />
        </div>

    );
}

export default Profile;