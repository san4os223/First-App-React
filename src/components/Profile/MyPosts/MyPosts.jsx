import React from "react";
import posts from './MyPosts.module.css';
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreate} from "../../../Redux/Reducer/Profile-reducer";


function MyPosts (props) {


    let posts1 = props.postData.map( (p ) => {
        return( <Post message = {p.name} likes = {p.likes}/>)
    } )

let newPostsElement = React.createRef();
    let onAddPosts = () => {
        props.addPost();


    }
let onPostChange  = () =>{
    let text = newPostsElement.current.value;
    props.updateNewPostText(text);

};


    return (<div className={posts.content}>
            <div className={posts.item}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostsElement} value={props.newPostText}/>

                    <div > All posts <button onClick={onAddPosts} > Add post  </button>

                    </div>
                </div>
            </div>
            {posts1}

        </div>

    );
}
export default MyPosts;