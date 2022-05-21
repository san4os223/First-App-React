import React from "react";
import r from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Posts/Post";
import {uppdateNewPostText} from "../../Redux/State";







function Profile(props) {
  

    return (<div>

            <MyPosts postData ={props.postData}
                     addPost ={props.addPost}
                    newPostText ={props.newPostText}
                     uppdateNewPostText = {props.uppdateNewPostText}
            />
        </div>

    );
}

export default Profile;