import React from "react";
import posts from './MyPosts.module.css';
import Post from "./Posts/Post";

function MyPosts (props) {


    let posts1 = props.postData.map( (p ) => {
        return( <Post message = {p.name} likes = {p.likes}/>)
    } )

let newPostsElement = React.createRef();
    let addPosts = () => {

        props.dispatch({type: 'ADD-POST'});

    }
let onPostChange  = () =>{
    let text = newPostsElement.current.value;
    let action = {type:'UPDATE-NEW-POST-TEXT',newText:text }
    props.dispatch(action);
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