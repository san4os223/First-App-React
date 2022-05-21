import React from "react";
import posts from './MyPosts.module.css';
import Post from "./Posts/Post";

function MyPosts (props) {


    let posts1 = props.postData.map( (p ) => {
        return( <Post message = {p.name} likes = {p.likes}/>)
    } )

let newPostsElement = React.createRef();
    let addPosts = () => {

        props.addPost();

    }
let onPostChange  = () =>{
    let text = newPostsElement.current.value;
    props.uppdateNewPostText(text)
};


    return (<div className={posts.content}>
            <div className={posts.item}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostsElement} value={props.newPostText}/>

                    <div > All posts <button onClick={addPosts} > Add post  </button>

                    </div>
                </div>
            </div>
            {posts1}

        </div>

    );
}
export default MyPosts;