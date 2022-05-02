import React from "react";
import posts from './MyPosts.module.css';
import Post from "./Posts/Post";
function MyPosts () {

    return (<div className={posts.content}>
            <div className={posts.item}>
                My posts
            </div>
            <Post message = 'hi hello'/>
            <Post message = 'its my first post' likes = '20'/>
        </div>

    );
}
export default MyPosts;