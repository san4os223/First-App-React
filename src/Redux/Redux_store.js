import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducer/Profile-reducer";
import dialogsReducer from "./Reducer/Dialogs-reducer";
import { configureStore } from '@reduxjs/toolkit'

let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogPage: dialogsReducer,

    }});

// let  = combineReducers({
//     profileReducer,
//     dialogsReducer,
// });
// let store = createStore(redusers);


export default store;