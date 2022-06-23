
import reportWebVitals from './reportWebVitals';
import store from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {

    root.render(
        <React.StrictMode>

            <App appState={state} dispatch={store.dispatch.bind(store)} store = {store}
               />
        </React.StrictMode>
    );
}

rerenderTree(store.getState());
store.subscribe(rerenderTree);

