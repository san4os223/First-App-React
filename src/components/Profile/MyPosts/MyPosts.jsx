import React from "react";
import posts from './MyPosts.module.css';
import Post from "./Posts/Post";
function MyPosts () {

    return (<div className={posts.content}>
            <div className={posts.item}>
               <div>
                <div> My posts <button className={posts.buttontAddPost}>add post</button></div>
            </div>
            </div>
            <Post message = 'hi hello'/>
            <Post message = 'its my first post' likes = '20'/>
        </div>

    );
}
export default MyPosts;