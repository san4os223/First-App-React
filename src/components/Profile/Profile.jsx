import React from "react";
import r from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {

    return (<div className={r.content}>

            <MyPosts/>
        </div>

    );
}

export default Profile;