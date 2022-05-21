import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, uppdateNewPostText} from "./Redux/State";




const root = ReactDOM.createRoot(document.getElementById('root'));
    export let rerenderTree = (state) => {

    root.render(
        <React.StrictMode>

            <App appState={state} addPost={addPost} uppdateNewPostText = {uppdateNewPostText}/>
        </React.StrictMode>
    );
}


