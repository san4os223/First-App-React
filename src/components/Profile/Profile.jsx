import React from "react";
import r from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Posts/Post";
import {uppdateNewPostText} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";







function Profile(props) {
  

    return (<div>

            <MyPostsContainer/>
        </div>

    );
}

export default Profile;