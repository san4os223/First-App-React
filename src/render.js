import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from "./Redux/State";



export let rerenderTree = (state) => {
const root = ReactDOM.createRoot(document.getElementById('root'));


    root.render(
        <React.StrictMode>

            <App appState={state} addPost={addPost}/>
        </React.StrictMode>
    );
}


