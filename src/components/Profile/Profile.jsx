import React from "react";
import r from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Posts/Post";







function Profile(props) {
  

    return (<div>

            <MyPosts postData ={props.postData} />
        </div>

    );
}

export default Profile;