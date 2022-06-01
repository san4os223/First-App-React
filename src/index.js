
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, uppdateNewPostText} from "./Redux/State";




const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {

    root.render(
        <React.StrictMode>

            <App appState={state} addPost={addPost} uppdateNewPostText = {uppdateNewPostText}/>
        </React.StrictMode>
    );
}

rerenderTree(state);
subscribe(rerenderTree);

