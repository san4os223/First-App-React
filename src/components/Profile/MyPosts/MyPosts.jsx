import React from "react";
import posts from './MyPosts.module.css';
import Post from "./Posts/Post";

function MyPosts (props) {
    let postData = [
        {id: 1,name:'hi hello',likes:12},
        {id: 2,name:'its my first post',likes:10},

    ]
    let posts1 = postData.map( (p ) => {
        return( <Post message = {p.name} likes = {p.likes}/>)
    } )

    return (<div className={posts.content}>
            <div className={posts.item}>
                <div>
                    <div> My posts <button className={posts.buttontAddPost}>add post</button></div>
                </div>
            </div>
            {posts1}

        </div>

    );
}
export default MyPosts;