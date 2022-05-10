import post from "../components/Profile/MyPosts/Posts/Post";
import NewsPosts from "../components/News/NewsPosts/NewsPosts";
import {createRenderer} from "react-dom/test-utils";
import {rerenderTree} from "../render";



let state = {

    profilePage:{
        postData:[
            {id: 1,name:'hi hello',likes:12},
            {id: 2,name:'its my first post',likes:10},
        ],
    },

    dialogPage:{
        dialogData:[
            {id : 1 , name: '1Aааааааа' },
            {id : 2 , name: '2Aааааааа' },
            {id : 3 , name: '3Aааааааа' },
            {id : 4 , name: '4Aааааааа' },
            {id : 5 , name: '5Aаааааааа' },
            {id : 6 , name: '6Aаааааааа' }
        ],
        messageData:[
            {id: 1,name:'hello'},
            {id: 2,name:'h'},
            {id: 3,name:'ha'},
            {id: 4,name:'hihi'},
            {id: 5,name:'hyy'},
            {id: 6,name:'YOOOOOO'}
        ]
    }

}
 export let addPost = (postMessage) => {
    let newPost = {
        id:8,
        name:postMessage,
        likesCount: 2
    };
    state.profilePage.postData.push(newPost);
     rerenderTree(state);

}



export default state;