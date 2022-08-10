
import store from "./Redux/Redux_store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";




const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {

    root.render(
        <React.StrictMode>
         <Provider store={store}>
            <App/>
         </Provider>
        </React.StrictMode>
    );
}

rerenderTree(store.getState());

store.subscribe(()=>{
let state = store.getState();
 rerenderTree(state);
});

